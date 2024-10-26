async function populate() {
  const requestURL = "index.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superIndex = await response.json();

  populateIndex(superIndex);
}        

function populateIndex(obj) {
  const data = document.querySelector(".data");

  for (const index of obj) {
    const dlOuter = document.createElement("dl");
    dlOuter.className = "outer";

    const dtNo = document.createElement("dt");
    dtNo.className = "no";

    const ddOuter = document.createElement("dd");

    const dlInner = document.createElement("dl");
    dlInner.className = "inner open";

    const dtTime = document.createElement("dt");
    dtTime.textContent = index.時間;

    const ddInner = document.createElement("dd");

    const pTitle = document.createElement("p");
    pTitle.className = "title";
    pTitle.textContent = index.講演タイトル;

    const pSmall = document.createElement("p");
    pSmall.className = "small";
    pSmall.textContent = `${index.社名・団体名} ${index.部署名} ${index.講演者氏名}`;

    ddInner.appendChild(pTitle);
    ddInner.appendChild(pSmall);

    dlInner.appendChild(dtTime);
    dlInner.appendChild(ddInner);

    const divDetail = document.createElement("div");
    divDetail.className = "detail";

    const dlDetailInner = document.createElement("dl");
    dlDetailInner.className = "inner";

    const dtDetailNo = document.createElement("dt");
    dtDetailNo.className = "no";

    const ddDetail = document.createElement("dd");

    const divDocumentArea = document.createElement("div");
    divDocumentArea.className = "document_area";

    const pDetailSmall = document.createElement("p");
    pDetailSmall.className = "small";
    pDetailSmall.textContent = index["講演概要"] || "ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。";

    divDocumentArea.appendChild(pDetailSmall);
    ddDetail.appendChild(divDocumentArea);
    dlDetailInner.appendChild(dtDetailNo);
    dlDetailInner.appendChild(ddDetail);
    divDetail.appendChild(dlDetailInner);

    ddOuter.appendChild(dlInner);
    ddOuter.appendChild(divDetail);

    dlOuter.appendChild(dtNo);
    dlOuter.appendChild(ddOuter);

    data.appendChild(dlOuter);
  }
}

populate();