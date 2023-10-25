// The `Streamlit` object exists because our html file includes
// `streamlit-component-lib.js`.
// If you get an error about "Streamlit" not being defined, that
// means you're missing that file.

function sendValue(value) {
  Streamlit.setComponentValue(value);
}

/**
 * The component's render function. This will be called immediately after
 * the component is initially loaded, and then again every time the
 * component gets new data from Python.
 */
function onRender(event) {
  // Only run the render code the first time the component is loaded.
  if (!window.rendered) {
    // You most likely want to get the data passed in like this
    // const {input1, input2, input3} = event.detail.args
    // You'll most likely want to pass some data back to Python like this
    // sendValue({output1: "foo", output2: "bar"})
    //  const {chatlist} = event.detail.args;
    const chatlist = [
      {
        question:
          "https://static.openxlab.org.cn/landmarks/pc/footerbanner.png",
        response: "ou'll most likely want to pass some data back to Python like thisou'll most likely want to pass some data back to Python like thisou'll most likely want to pass some data back to Python like thisou'll most likely want to pass some data back to Python like thisou'll most likely want to pass some data back to Python like thisou'll most likely want to pass some data back to Python like this",
        user: "user",
        robot: "robot",
      },
      {
        question:
          "https://static.openxlab.org.cn/landmarks/pc/footerbanner.png",
        response: "ssss",
        user: "assistant",
        robot: "robot",
      },
      {
        question:
          "https://static.openxlab.org.cn/landmarks/pc/footerbanner.png",
        response: "ssss",
        user: "ai",
        robot: "robot",
      },
    ];

    let innerHtml = "";
    if (chatlist?.length && chatlist.length > 0) {
      for (let i = 0; i < chatlist.length; i++) {
        innerHtml += `<div class="messageRow">
        <div class="avator">
          ${chatlist[i].user}
        </div>
        <div class="imgBox">
          <img src=${chatlist[i].question} />
        </div>
      </div>
      <div class="responseRow">
          <div class="rebotAvator">
            ${chatlist[i].robot}
          </div>
          <div class="responseBox">
            <p>${chatlist[i].response}</p>
          </div>
      </div>`;
      }
    }

    if (innerHtml) {
      document.getElementById("borderContainer").innerHTML = innerHtml;
    }

    window.rendered = true;
  }
}

// Render the component whenever python send a "render event"
Streamlit.events.addEventListener(Streamlit.RENDER_EVENT, onRender);
// Tell Streamlit that the component is ready to receive events
Streamlit.setComponentReady();
// Render with the correct height, if this is a fixed-height component
Streamlit.setFrameHeight(640);