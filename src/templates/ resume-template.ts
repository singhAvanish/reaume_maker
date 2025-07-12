export function resumeTemplate(formData: any): string {
  const {
    fullName,
    title,
    email,
    phoneNo,
    linkedInLink,
    gitHub,
    collegeDetails,
    experience,
    projects,
    skills,
    achievements,
  } = formData;

  return `
  <html>
    <head>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', sans-serif;
    color: #333;
    padding: 30px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 2px solid #000;
    padding-bottom: 10px;
    margin-bottom: 12px;
  }

  .left h1 {
    font-size: 24px;
  }

  .left p {
    font-size: 14px;
    margin-top: 4px;
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 12px;
    line-height: 1.4;
    text-align: right;
  }

  .rightA {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
    margin-top: 6px;
  }

  .icon-link {
    display: flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    color: #333;
    font-size: 12px;
  }

  .section {
    margin-top: 14px;
  }

  .section h2 {
    font-size: 16px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 8px;
    color: #000;
  }

  .edu-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
  }

  .edu-left {
    flex: 1;
  }

  .edu-left strong {
    font-size: 14px;
  }

  .edu-left p {
    font-size: 12px;
    margin-top: 2px;
  }

  .edu-right {
    text-align: right;
    font-size: 12px;
    min-width: 100px;
  }

  .exp-item {
    margin-bottom: 12px;
  }

  .exp-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .exp-left strong {
    font-size: 14px;
  }

  .exp-left p {
    font-size: 12px;
    margin-top: 2px;
  }

  .exp-right {
    font-size: 12px;
    text-align: right;
    white-space: nowrap;
  }

  ul {
    padding-left: 20px;
    margin-top: 6px;
  }

  ul li {
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 3px;
  }

  .item {
    margin-bottom: 10px;
  }

  .item strong {
    display: block;
    font-size: 14px;
    margin-bottom: 2px;
  }

  .item p {
    font-size: 12px;
  }
</style>

    </head>
    <body>
      <div class="header">
        <div class="left">
          <h1>${fullName}</h1>
          <p><strong>${title}</strong></p>
        </div>
        <div class="right">
  <p>${email}<br/>${phoneNo}</p>
  <div class="rightA">
    <a href="${linkedInLink}" class="icon-link">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="16" alt="LinkedIn Icon" />
      <span>LinkedIn</span>
    </a>
    <a href="${gitHub}" class="icon-link">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="16" alt="GitHub Icon" />
      <span>GitHub</span>
    </a>
  </div>
</div>
      </div>

    <div class="section">
  <h2>Education</h2>
  ${collegeDetails.map((c: any) => `
    <div class="item edu-item">
      <div class="edu-left">
        <strong>${c.courseName}</strong>
        <p>${c.collegeName}</p>
      </div>
      <div class="edu-right">
        <p>${c.year}</p>
        <p>${c.location}</p>
      </div>
    </div>
  `).join('')}
</div>


    <div class="section">
  <h2>Experience</h2>
  ${experience.map((e: any) => `
    <div class="item exp-item">
      <div class="exp-header">
        <div class="exp-left">
          <strong>${e.company}</strong>
          <p >${e.designation}</p>
        </div>
        <div class="exp-right">
          <p>${e.location}</p>
          <p>${e.year}</p>
        </div>
      </div>
   <ul>
  ${
    (() => {
      return e.workSummary
        .split('//') // Split on custom delimiter
        .map((line: string) => line.trim()) // Clean up whitespace
        .filter((line: string) => line.length > 0) // Remove empty lines
        .map((line: string) => `<li>${line}</li>`) // Convert to <li>
        .join('');
    })()
  }
</ul>
    </div>
  `).join('')}
</div>



      <div class="section">
        <h2>Projects</h2>
        ${projects.map((p: any) => `
          <div class="item">
            <strong>${p.projectName}</strong>
            <div style="display: flex; gap: 4px; align-items: center; font-size: 10px;">
  <strong>Tools:</strong> <span>${p.tools.join(', ')}</span>
</div>


          <ul>
  ${
    (() => {
      return p.summary
        .split('//') // Split by double slash
        .map((line: string) => line.trim()) // Trim whitespace
        .filter((line: string) => line.length > 0) // Remove empty lines
        .map((line: string) => `<li>${line}</li>`) // Wrap in <li>
        .join('');
    })()
  }
</ul>
          </div>`).join('')}
      </div>

      <div class="section">
        <h2>Skills</h2>
        <ul>
          <li><strong>Languages:</strong> ${skills.programmingLanguages.join(', ')}</li>
          <li><strong>Libraries/Frameworks:</strong> ${skills.libraries.join(', ')}</li>
          <li><strong>Tools:</strong> ${skills.tools.join(', ')}</li>
          <li><strong>Databases:</strong> ${skills.database.join(', ')}</li>
          <li><strong>Cloud Services:</strong> ${skills.cloudServices.join(', ')}</li>
        </ul>
      </div>

      <div class="section">
        <h2>Achievements</h2>
        <ul>
  ${
    (() => {
      return achievements
        .join('')            // Join array into a single string
        .split('//')         // Split by custom delimiter
        .map((a: string) => a.trim()) // Trim whitespace
        .filter((a: string) => a.length > 0) // Remove empty strings
        .map((a: string) => `<li>${a}</li>`) // Convert to <li>
        .join('');
    })()
  }
</ul>
      </div>
    </body>
  </html>
  `;
}
