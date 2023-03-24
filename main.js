const sections = {
  'Home': ['Introduction', 'About', 'Job Description', 'Lilyvale Culture Notes'],
  'Events and Responsibilities': ['Enkai', 'Assembly and Morning Announcements', 'Cermonies', 'Exhibition', 'Eiken', 'Speech Contest', 'Christmas Assembly', "Sports' Day/Marathon", 'Speaking Test', 'Open School', 'Year Preperation'],
  'Common Tasks': ['Re-Test', 'Cleaning', 'Rotational Duties', 'Grading', 'Material Preparation', 'Lesson Preparation'],
  'Collaboration and Communication': ['Working with T1', 'Admin and Staff', 'Students and Parents'],
  'Resources and Tools': ['Textbooks and Supplementary Materials', 'Technology in the Classroom', 'Websites and Online Resources', 'Classroom Managemetn Techniques']
};

function changeSection(sectionName) {
  document.getElementById('currentSection').innerText = sectionName;
  document.getElementById('sidenav').innerHTML = '';

  sections[sectionName].forEach(chapter => {
    const chapterLink = document.createElement('a');
    chapterLink.innerText = chapter;
    chapterLink.href = '#';
    chapterLink.onclick = () => changeChapter(sectionName, chapter);
    document.getElementById('sidenav').appendChild(chapterLink);
  });

  changeChapter(sectionName, sections[sectionName][0]);
}

function changeChapter(sectionName, chapterName) {
  const iframeSrc = `content/${sectionName}/${chapterName}.html`;
  document.getElementById('mainContent').innerHTML = `<iframe src="${iframeSrc}" frameborder="0" style="width: 100%; height: 100%;"></iframe>`;
}
