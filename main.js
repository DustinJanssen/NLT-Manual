async function fetchSection(sectionName) {
  try {
    const response = await fetch(`content/${sectionName}`);
    const text = await response.text();
    const files = text.match(/<a href="(.*?)">/g).map(a => a.slice(9, -2));
    const chapters = files.filter(file => file.endsWith('.md'));

    return chapters;
  } catch (error) {
    console.error('Error fetching section:', error);
  }
}

async function fetchChapter(sectionName, chapterName) {
  try {
    const response = await fetch(`content/${sectionName}/${chapterName}`);
    const markdown = await response.text();
    const html = marked(markdown);

    return html;
  } catch (error) {
    console.error('Error fetching chapter:', error);
  }
}

async function changeSection(sectionName) {
  document.getElementById('currentSection').innerText = sectionName;
  document.getElementById('sidenav').innerHTML = '';

  const chapters = await fetchSection(sectionName);
  chapters.forEach(chapter => {
    const chapterLink = document.createElement('a');
    chapterLink.innerText = chapter.replace('.md', '');
    chapterLink.href = '#';
    chapterLink.onclick = () => changeChapter(sectionName, chapter);
    document.getElementById('sidenav').appendChild(chapterLink);
  });

  changeChapter(sectionName, chapters[0]);
}

async function changeChapter(sectionName, chapterName) {
  const htmlContent = await fetchChapter(sectionName, chapterName);
  document.getElementById('mainContent').innerHTML = htmlContent;
}
