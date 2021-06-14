// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: findAndReplace,
  });
});


function findAndReplace(){
const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')

for (let i = 0; i < text.length; i++){
  text[i].innerHTML = text[i].innerHTML.replace('Unpopular opinion', 'Shity opinion')
  text[i].innerHTML = text[i].innerHTML.replace('unpopular opinion', 'shity opinion')
}
}
