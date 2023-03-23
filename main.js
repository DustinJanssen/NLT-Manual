const sections = {
  'Home': ['Introduction.html', 'About.html', 'Job Description.html', 'Lilyvale Culture Notes.html'],
  'Events and Responsibilities': ['Enkai.html', 'Assembly and Morning Announcements.html', 'Cermonies.html', 'Exhibition.html', 'Eiken.html', 'Speech Contest.html', 'Christmas Assembly.html', "Sports' Day/Marathon.html", 'Speaking Test.html', 'Open School.html', 'Year Preperation.html'],
  'Common Tasks': ['Re-Test.html', 'Cleaning.html', 'Rotational Duties.html', 'Grading.html', 'Material Preparation.html', 'Lesson Preparation.html'],
  'Collaboration and Communication': ['Working with T1.html', 'Admin and Staff.html', 'Students and Parents.html'],
  'Resources and Tools': ['Textbooks and Supplementary Materials.html', 'Technology in the Classroom.html', 'Websites and Online Resources.html', 'Classroom Managemetn Techniques.html']
};

function changeSection(sectionName) {
  document.getElementById('currentSection').innerText = sectionName;
  document.getElementById('sidenav').innerHTML = '';

  sections[sectionName].array.forEach(chapter => {
    const chapterLink = document.createElement('a');
    chapterLink.innerText = chapter;
    chapterLink.href = '#';
    chapterLink.onclick = () => changeChapter(sectionName, chapter);
    document.getElementById('sidenav').appendChild(chapterLink);
  });

  if (sectionName === 'Start') {
    document.getElementById('Start').innerHTML = `
    <h2>Welcome to the Lilyvale NLT Manual</h2>
    <p>Select a section and chapter from the navigation to begin.</p>
    `;
    return;
  }

  changeChapter(sectionName, sections[sectionName][0]);
}

function changeChapter(sectionName, chapterName) {
  const iframeSrc = `content/${sectionName}/${chapterName}.html`;
  document.getElementById('mainContent').innerHTML = `<iframe src="${iframeSrc}" frameborder="0" style="width: 100%; height: 100%;"></iframe>`;
}
