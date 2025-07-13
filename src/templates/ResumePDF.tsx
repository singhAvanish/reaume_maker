// export function resumeTemplate(formData: any): string {
//   const {
//     fullName,
//     title,
//     email,
//     phoneNo,
//     linkedInLink,
//     gitHub,
//     collegeDetails,
//     experience,
//     projects,
//     skills,
//     achievements,
//   } = formData;

//   return `
//   <html>
//     <head>

// <style>
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   body {
//     font-family: 'Segoe UI', sans-serif;
//     color: #333;
//     padding: 30px;
//   }

//   .header {
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-start;
//     border-bottom: 2px solid #000;
//     padding-bottom: 10px;
//     margin-bottom: 12px;
//   }

//   .left h1 {
//     font-size: 24px;
//   }

//   .left p {
//     font-size: 14px;
//     margin-top: 4px;
//   }

//   .right {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-end;
//     font-size: 12px;
//     line-height: 1.4;
//     text-align: right;
//   }

//   .rightA {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-end;
//     gap: 6px;
//     margin-top: 6px;
//   }

//   .icon-link {
//     display: flex;
//     align-items: center;
//     gap: 6px;
//     text-decoration: none;
//     color: #333;
//     font-size: 12px;
//   }

//   .section {
//     margin-top: 14px;
//   }

//   .section h2 {
//     font-size: 16px;
//     border-bottom: 1px solid #ccc;
//     margin-bottom: 8px;
//     color: #000;
//   }

//   .edu-item {
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-start;
//     margin-bottom: 10px;
//   }

//   .edu-left {
//     flex: 1;
//   }

//   .edu-left strong {
//     font-size: 14px;
//   }

//   .edu-left p {
//     font-size: 12px;
//     margin-top: 2px;
//   }

//   .edu-right {
//     text-align: right;
//     font-size: 12px;
//     min-width: 100px;
//   }

//   .exp-item {
//     margin-bottom: 12px;
//   }

//   .exp-header {
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-start;
//   }

//   .exp-left strong {
//     font-size: 14px;
//   }

//   .exp-left p {
//     font-size: 12px;
//     margin-top: 2px;
//   }

//   .exp-right {
//     font-size: 12px;
//     text-align: right;
//     white-space: nowrap;
//   }

//   ul {
//     padding-left: 20px;
//     margin-top: 6px;
//   }

//   ul li {
//     font-size: 12px;
//     line-height: 1.5;
//     margin-bottom: 3px;
//   }

//   .item {
//     margin-bottom: 10px;
//   }

//   .item strong {
//     display: block;
//     font-size: 14px;
//     margin-bottom: 2px;
//   }

//   .item p {
//     font-size: 12px;
//   }
// </style>

//     </head>
//     <body>
//       <div class="header">
//         <div class="left">
//           <h1>${fullName}</h1>
//           <p><strong>${title}</strong></p>
//         </div>
//         <div class="right">
//   <p>${email}<br/>${phoneNo}</p>
//   <div class="rightA">
//     <a href="${linkedInLink}" class="icon-link">
//       <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="16" alt="LinkedIn Icon" />
//       <span>LinkedIn</span>
//     </a>
//     <a href="${gitHub}" class="icon-link">
//       <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="16" alt="GitHub Icon" />
//       <span>GitHub</span>
//     </a>
//   </div>
// </div>
//       </div>

//     <div class="section">
//   <h2>Education</h2>
//   ${collegeDetails.map((c: any) => `
//     <div class="item edu-item">
//       <div class="edu-left">
//         <strong>${c.courseName}</strong>
//         <p>${c.collegeName}</p>
//       </div>
//       <div class="edu-right">
//         <p>${c.year}</p>
//         <p>${c.location}</p>
//       </div>
//     </div>
//   `).join('')}
// </div>


//     <div class="section">
//   <h2>Experience</h2>
//   ${experience.map((e: any) => `
//     <div class="item exp-item">
//       <div class="exp-header">
//         <div class="exp-left">
//           <strong>${e.company}</strong>
//           <p >${e.designation}</p>
//         </div>
//         <div class="exp-right">
//           <p>${e.location}</p>
//           <p>${e.year}</p>
//         </div>
//       </div>
//    <ul>
//   ${
//     (() => {
//       return e.workSummary
//         .split('//') // Split on custom delimiter
//         .map((line: string) => line.trim()) // Clean up whitespace
//         .filter((line: string) => line.length > 0) // Remove empty lines
//         .map((line: string) => `<li>${line}</li>`) // Convert to <li>
//         .join('');
//     })()
//   }
// </ul>
//     </div>
//   `).join('')}
// </div>



//       <div class="section">
//         <h2>Projects</h2>
//         ${projects.map((p: any) => `
//           <div class="item">
//             <strong>${p.projectName}</strong>
//             <div style="display: flex; gap: 4px; align-items: center; font-size: 10px;">
//   <strong>Tools:</strong> <span>${p.tools.join(', ')}</span>
// </div>


//           <ul>
//   ${
//     (() => {
//       return p.summary
//         .split('//') // Split by double slash
//         .map((line: string) => line.trim()) // Trim whitespace
//         .filter((line: string) => line.length > 0) // Remove empty lines
//         .map((line: string) => `<li>${line}</li>`) // Wrap in <li>
//         .join('');
//     })()
//   }
// </ul>
//           </div>`).join('')}
//       </div>

//       <div class="section">
//         <h2>Skills</h2>
//         <ul>
//           <li><strong>Languages:</strong> ${skills.programmingLanguages.join(', ')}</li>
//           <li><strong>Libraries/Frameworks:</strong> ${skills.libraries.join(', ')}</li>
//           <li><strong>Tools:</strong> ${skills.tools.join(', ')}</li>
//           <li><strong>Databases:</strong> ${skills.database.join(', ')}</li>
//           <li><strong>Cloud Services:</strong> ${skills.cloudServices.join(', ')}</li>
//         </ul>
//       </div>

//       <div class="section">
//         <h2>Achievements</h2>
//         <ul>
//   ${
//     (() => {
//       return achievements
//         .join('')            // Join array into a single string
//         .split('//')         // Split by custom delimiter
//         .map((a: string) => a.trim()) // Trim whitespace
//         .filter((a: string) => a.length > 0) // Remove empty strings
//         .map((a: string) => `<li>${a}</li>`) // Convert to <li>
//         .join('');
//     })()
//   }
// </ul>
//       </div>
//     </body>
//   </html>
//   `;
// }

import { Document, Page, Text, View, StyleSheet, Image, Link } from '@react-pdf/renderer';

interface ResumeProps {
  formData: any;
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Helvetica',
    color: '#333',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  leftHeader: {
    flex: 1,
  },
  rightHeader: {
    flex: 1,
    alignItems: 'flex-end',
  },
  section: {
    marginBottom: 8,
  },
  heading: {
    fontSize: 16,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderStyle: 'solid',
    color: '#000',
  },
  title: {
    fontSize: 18,
    marginBottom: 4,
    fontWeight:'bold'
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 2,
    fontWeight:'bold'
  },
 
  bulletContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 2,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  
  bulletDot: {
    width: 10,
    fontSize: 10,
    lineHeight: 1.5,
  },
  
  bulletText: {
    flex: 1,
    fontSize: 10,
    lineHeight: 1.5,
  },
  bullet: {
    fontSize: 10,
  marginBottom: 2,
  width: '100%',
  flexWrap: 'wrap',
  lineHeight: 1
  },
  socialLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 2,
  },
  icon: {
    width: 12,
    height: 12,
    marginRight: 6,
  },
  linkText: {
    fontSize: 10,
    color: '#0366d6',
  },
  contactText: {
    fontSize: 10,
    textAlign: 'right',
  },
  hr: {
    borderBottomWidth: 2,
    
    borderBottomColor: 'balck',
    borderStyle: 'solid',
    color: '#000',
    marginBottom:5
  },
  education:{
    flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'wrap', 
  marginBottom: 6,

  },
  eduLeft: {
    flexBasis: '80%',
    flexGrow: 1,
  },
  eduRight: {
    flexBasis: '20%',
    alignItems: 'flex-end',
  },
  clgName:{
    fontWeight:"bold",
    marginRight:5

  },
  cName:{
    fontSize:10

  },
  exp:{
    display:"flex",
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap'

  },
  expLeft:{
    flexBasis: '80%',
    flexGrow: 1,

  },
  expRight:{
    flexBasis:'20%',
    alignItems:'flex-end'
  },
  tools:{
    
    fontWeight:'bold'

  },
  toolss:{
    display:'flex',
    flexDirection:'row',
    fontSize:10,

  },
  skill:{
    fontSize:10,
    

  },
  skillT:{
    fontWeight:"bold"
  }
  


});

export default function ResumePDF({ formData }: ResumeProps) {
  const {
    fullName = '',
    title = '',
    email = '',
    phoneNo = '',
    linkedInLink = '',
    gitHub = '',
    collegeDetails = [],
    experience = [],
    projects = [],
    skills = {
      programmingLanguages: [],
      libraries: [],
      tools: [],
      database: [],
      cloudServices: []
    },
    achievements = []
  } = formData;

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.header}>
          <View style={styles.leftHeader}>
            <Text style={styles.title}>{fullName}</Text>
            <Text style={styles.subtitle}>{title}</Text>
          </View>
          <View style={styles.rightHeader}>
            <Text style={styles.contactText}>{email}</Text>
            <Text style={styles.contactText}>{phoneNo}</Text>
            <View style={styles.socialLinks}>
              <Image style={styles.icon} src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
              <Link style={styles.linkText} src={linkedInLink}>Linkedin</Link>
            </View>
            <View style={styles.socialLinks}>
              <Image style={styles.icon} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
              <Link style={styles.linkText} src={gitHub}>GitHub</Link>
            </View>
          </View>
          
        </View>
        <View style={styles.hr}></View>


        <View style={styles.section}>
          <Text style={styles.heading}>Education</Text>
          {collegeDetails.map((c: any, i: number) => (
            <View key={i} style={styles.education}>
              <View style={styles.eduLeft} >
              <Text style={styles.clgName}>{c.collegeName}</Text>
              <Text style={styles.cName}>{c.courseName}</Text>
              </View>
              <View style={styles.eduRight}>
              <Text style={styles.cName}>{c.year}</Text>
              <Text style={styles.cName}>{c.location}</Text>
              </View>
             
             
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Experience</Text>
          {experience.map((e: any, i: number) => (
            <View key={i}>
              <View style={styles.exp}>
                <View style={styles.expLeft}>
                <Text style={styles.subtitle}>{e.company}</Text>
                <Text style={styles.cName}>{e.designation}</Text>

                </View>
                <View style={styles.expRight}>
                <Text style={styles.cName}>{e.year}</Text>
                <Text style={styles.cName}>{e.location}</Text>
                </View>
              

              </View>
             
              {e.workSummary?.split('//').filter(Boolean).map((line: string, idx: number) => (
                <View key={idx} style={styles.bulletContainer}>
                <Text style={styles.bulletDot}>•</Text>
                <Text style={styles.bulletText}>{line.trim()}</Text>
              </View>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Projects</Text>
          {projects.map((p: any, i: number) => (
            <View key={i}>
              
              <Text style={styles.subtitle}>{p.projectName}</Text>
              <View style={styles.toolss}>
              <Text style={styles.tools}>Tools: </Text>
              <Text>{p.tools.join(', ')}</Text>

              </View>
              
              {p.summary?.split('//').filter(Boolean).map((line: string, idx: number) => (
                <Text key={idx} style={styles.bullet}>• {line.trim()}</Text>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Skills</Text>
          <Text style={styles.skill}><Text style={styles.skillT}>Languages: </Text>{skills.programmingLanguages.join(', ')}</Text>
          <Text style={styles.skill}><Text style={styles.skillT}>Libraries / Frameworks: </Text>{skills.libraries.join(', ')}</Text>
          <Text style={styles.skill}><Text style={styles.skillT}>Tools: </Text>{skills.tools.join(', ')}</Text>
          <Text style={styles.skill}><Text style={styles.skillT}>Databases: </Text>{skills.database.join(', ')}</Text>
          <Text style={styles.skill}><Text style={styles.skillT}>Cloud Services: </Text>{skills.cloudServices.join(', ')}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Achievements</Text>
          {achievements
            .flatMap((a: string) => a.split('//'))
            .filter(Boolean)
            .map((a: string, idx: number) => (
              <Text key={idx} style={styles.bullet}>• {a.trim()}</Text>
            ))}
        </View>
      </Page>
    </Document>
  );
}
