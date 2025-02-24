let bulkCount = bulks.length;
const bulkSize = bulks.length / count;
const stepSize = 100 / bulkCount;
let progress = 0;

const calcRadialStyle = x => `--value:${Math.ceil(x)}; --size:12rem; --thickness: 2rem;`;
const calcCountStyle = x => `--value:${Math.ceil(x)};`;

function conditionalRedirect() {
  //countdown -= bulkSize;
  progress += stepSize;
  progressBar = document.querySelector('progress.progress');
  progressBar.value = Math.ceil(progress);
  /*
  radial += stepSize;
  radialDiv = document.querySelector('div.radial-progress')
  countdownSpan = document.querySelector('span.countdown span')
  radialStyle = radialDiv.attributes.
    */

  bulkCount--;
  if (bulkCount == 0) {
    location = dashboardUrl;
  }
}

function handleBulkDiv(link) {
  //const link = node.querySelector('a').href;
  fetch(link).then( function() {
    //link.innerHTML = 'ok';
    //node.querySelector('span.loading').remove();
    conditionalRedirect();
  })
}

document.addEventListener("DOMContentLoaded", function() {
  //bulkDivs = document.querySelectorAll('div.bulk');
  //bulkCount = bulkDivs.length;
  bulks.forEach( function(link) { handleBulkDiv(link); });
})
