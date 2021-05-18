function $(selector) {
  const ele = document.querySelector(selector);
  return {
    html: function (stringValue) {
      ele.innerHTML = stringValue;
    },
  };
}

class PQuery {
  constructor(selector) {
    this.ele = document.querySelector(selector);
  }

  html(stringValue) {
    this.ele.innerHTML = stringValue;
  }

  on(event, cb) {
    this.ele.addEventListener(event, cb);
  }

  show() {
    this.ele.style.display = "block";
  }

  hide() {
    this.ele.style.display = "none";
  }

  ajax(obj) {
    const { url, data, success } = obj;
    let method = "";
    console.log(url);
    if (data && Object.keys(data).length === 0 && data.constructor === Object)
      method = "GET";
    else method = "POST";
    //method = 'GET';
    console.log(method);
    fetch(url, {
      method,
      //body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => success(data));
  }
}

function $$(selector) {
  return new PQuery(selector);
}
$$("button.hide").hide();
$$("button.continue").html("Next Step...");
$$("button.continue").on("click", () => {
  $$("button.hide").show();
});

let a = {
  url: "https://jsonplaceholder.typicode.com/users/1",
  data: {},
  success: function (data) {
    console.log(data);
  },
};

//$$().ajax(a)
//         let a = $$('button.continue');
//         let aFn = a.html;
//         let b = $$('button.continue');
//         let bFn = b.html;
//         console.log(a === b);
//         console.log(aFn === bFn)

let state = {
  data: 1,
};

setState = (obj) => {
  if (typeof obj === "function") {
    setTimeout(() => {
      state = obj(state);
    });
  } else {
    setTimeout(() => {
      state.data = obj.data + 1;
    });
  }
};

setState({ data: 12 });
setState({ data: 13 });
//setState((prevState) => {
//  return {
//    data: prevState.data + 100,
//  };
//});
//console.log(state.data);
setTimeout(() => {
  console.log(state);
});
