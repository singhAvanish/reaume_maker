

// 'use client';

// import { useState } from 'react';
// import ResumePreview from './ResumePreview';

// type College = {
//   collegeName: string;
//   courseName: string;
//   year: string;
//   location: string;
// };

// type Experience = {
//   company: string;
//   designation: string;
//   year: string;
//   location: string;
//   workSummary: string;
// };

// type Project = {
//   projectName: string;
//   tools: string[];
//   summary: string;
// };

// type Skills = {
//   programmingLanguages: string[];
//   libraries: string[];
//   tools: string[];
//   database: string[];
//   cloudServices: string[];
// };

// type FormDataType = {
//   fullName: string;
//   title: string;
//   email: string;
//   phoneNo: string;
//   linkedInLink: string;
//   gitHub: string;
//   collegeDetails: College[];
//   experience: Experience[];
//   projects: Project[];
//   skills: Skills;
//   achievements: string[];
// };

// export default function ResumeForm() {
//   const [formData, setFormData] = useState<FormDataType>({
//     fullName: "",
//     title: "",
//     email: "",
//     phoneNo: "",
//     linkedInLink: "",
//     gitHub: "",
//     collegeDetails: [{ collegeName: "", courseName: "", year: "", location: "" }],
//     experience: [{ company: "", designation: "", year: "", location: "", workSummary: "" }],
//     projects: [{ projectName: "", tools: [], summary: "" }],
//     skills: {
//       programmingLanguages: [],
//       libraries: [],
//       tools: [],
//       database: [],
//       cloudServices: []
//     },
//     achievements: []
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleNestedChange = (section: string, index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     const updated = [...(formData as any)[section]];
//     updated[index][name] = value;
//     setFormData(prev => ({ ...prev, [section]: updated }));
//   };

//   const addEntry = (section: 'collegeDetails' | 'experience' | 'projects') => {
//     const emptyEntries: any = {
//       collegeDetails: { collegeName: "", courseName: "", year: "", location: "" },
//       experience: { company: "", designation: "", year: "", location: "", workSummary: "" },
//       projects: { projectName: "", tools: [], summary: "" }
//     };
//     setFormData(prev => ({
//       ...prev,
//       [section]: [...prev[section], emptyEntries[section]]
//     }));
//   };

//   const removeEntry = (
//     section: 'collegeDetails' | 'experience' | 'projects',
//     index: number
//   ) => {
//     setFormData((prev) => ({
//       ...prev,
//       [section]: prev[section].filter((_, i) => i !== index),
//     }));
//   };

//   const handleListChange = (category: string, value: string) => {
//     setFormData(prev => ({
//       ...prev,
//       skills: {
//         ...prev.skills,
//         [category]: value.split(',').map((item) => item.trim())
//       }
//     }));
//   };

//   const handleAchievementsChange = (value: string) => {
//     setFormData(prev => ({
//       ...prev,
//       achievements: value.split(',').map((item) => item.trim())
//     }));
//   };

//   const handleSubmit = async () => {
//     try {
//       const res = await fetch("/api/generate-resume", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//       })
//       if (!res.ok) {
//         throw new Error('Failed to generate PDF')
//       }
//       const blob = await res.blob()
//       const url = window.URL.createObjectURL(blob)
//       const link = document.createElement('a')
//       link.href = url
//       link.download = 'resume.pdf';
//       document.body.appendChild(link)
//       link.click()
//       link.remove()
//       URL.revokeObjectURL(url)
//     } catch (err) {
//       console.error('Error generating resume:', err);
//     }
//   }

//   return (
//     <div style={{
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       minHeight: '100vh',
//       fontFamily: "'Segoe UI', sans-serif"
//     }}>
//       {/* Form Column */}
//       <div style={{
//         padding: '2rem',
//         backgroundColor: '#f8f9fa',
//         overflowY: 'auto',
//         height: '100vh'
//       }}>
//         <h1 style={{
//           color: '#2c3e50',
//           marginBottom: '2rem',
//           fontSize: '2rem',
//           borderBottom: '2px solid #3498db',
//           paddingBottom: '0.5rem'
//         }}>Resume Builder</h1>

//         <section style={{
//           backgroundColor: 'white',
//           padding: '1.5rem',
//           borderRadius: '8px',
//           boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//           marginBottom: '2rem'
//         }}>
//           <h2 style={{ color: '#3498db', marginBottom: '1rem' }}>Basic Info</h2>
//           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
//             <div>
//               <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name</label>
//               <input
//                 name="fullName"
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 style={{
//                   width: '100%',
//                   padding: '0.75rem',
//                   borderRadius: '4px',
//                   border: '1px solid #ddd',
//                   fontSize: '14px'
//                 }}
//               />
//             </div>
//             <div>
//               <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Title</label>
//               <input
//                 name="title"
//                 placeholder="Title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 style={{
//                   width: '100%',
//                   padding: '0.75rem',
//                   borderRadius: '4px',
//                   border: '1px solid #ddd',
//                   fontSize: '14px'
//                 }}
//               />
//             </div>
//           </div>
//           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
//             <div>
//               <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
//               <input
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 style={{
//                   width: '100%',
//                   padding: '0.75rem',
//                   borderRadius: '4px',
//                   border: '1px solid #ddd',
//                   fontSize: '14px'
//                 }}
//               />
//             </div>
//             <div>
//               <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Phone No</label>
//               <input
//                 name="phoneNo"
//                 placeholder="Phone No"
//                 value={formData.phoneNo}
//                 onChange={handleChange}
//                 style={{
//                   width: '100%',
//                   padding: '0.75rem',
//                   borderRadius: '4px',
//                   border: '1px solid #ddd',
//                   fontSize: '14px'
//                 }}
//               />
//             </div>
//           </div>
//           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
//             <div>
//               <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>LinkedIn URL</label>
//               <input
//                 name="linkedInLink"
//                 placeholder="LinkedIn URL"
//                 value={formData.linkedInLink}
//                 onChange={handleChange}
//                 style={{
//                   width: '100%',
//                   padding: '0.75rem',
//                   borderRadius: '4px',
//                   border: '1px solid #ddd',
//                   fontSize: '14px'
//                 }}
//               />
//             </div>
//             <div>
//               <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>GitHub URL</label>
//               <input
//                 name="gitHub"
//                 placeholder="GitHub URL"
//                 value={formData.gitHub}
//                 onChange={handleChange}
//                 style={{
//                   width: '100%',
//                   padding: '0.75rem',
//                   borderRadius: '4px',
//                   border: '1px solid #ddd',
//                   fontSize: '14px'
//                 }}
//               />
//             </div>
//           </div>
//         </section>

//         <section style={{
//           backgroundColor: 'white',
//           padding: '1.5rem',
//           borderRadius: '8px',
//           boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//           marginBottom: '2rem'
//         }}>
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
//             <h2 style={{ color: '#3498db' }}>Education</h2>
//             <button
//               onClick={() => addEntry('collegeDetails')}
//               style={{
//                 backgroundColor: '#3498db',
//                 color: 'white',
//                 border: 'none',
//                 padding: '0.5rem 1rem',
//                 borderRadius: '4px',
//                 cursor: 'pointer',
//                 fontSize: '14px'
//               }}
//             >
//               Add Education
//             </button>
//           </div>
//           {formData.collegeDetails.map((college, idx) => (
//             <div key={idx} style={{
//               border: '1px solid #eee',
//               padding: '1rem',
//               borderRadius: '6px',
//               marginBottom: '1rem',
//               position: 'relative'
//             }}>
//               <button
//                 type="button"
//                 onClick={() => removeEntry('collegeDetails', idx)}
//                 style={{
//                   position: 'absolute',
//                   top: '0.5rem',
//                   right: '0.5rem',
//                   backgroundColor: '#e74c3c',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '50%',
//                   width: '24px',
//                   height: '24px',
//                   cursor: 'pointer',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center'
//                 }}
//               >
//                 ×
//               </button>
//               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
//                 <div>
//                   <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>College Name</label>
//                   <input
//                     name="collegeName"
//                     placeholder="College Name"
//                     value={college.collegeName}
//                     onChange={(e) => handleNestedChange('collegeDetails', idx, e)}
//                     style={{
//                       width: '100%',
//                       padding: '0.5rem',
//                       borderRadius: '4px',
//                       border: '1px solid #ddd',
//                       fontSize: '14px'
//                     }}
//                   />
//                 </div>
//                 <div>
//                   <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Course</label>
//                   <input
//                     name="courseName"
//                     placeholder="Course"
//                     value={college.courseName}
//                     onChange={(e) => handleNestedChange('collegeDetails', idx, e)}
//                     style={{
//                       width: '100%',
//                       padding: '0.5rem',
//                       borderRadius: '4px',
//                       border: '1px solid #ddd',
//                       fontSize: '14px'
//                     }}
//                   />
//                 </div>
//               </div>
//               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
//                 <div>
//                   <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Year</label>
//                   <input
//                     name="year"
//                     placeholder="Year"
//                     value={college.year}
//                     onChange={(e) => handleNestedChange('collegeDetails', idx, e)}
//                     style={{
//                       width: '100%',
//                       padding: '0.5rem',
//                       borderRadius: '4px',
//                       border: '1px solid #ddd',
//                       fontSize: '14px'
//                     }}
//                   />
//                 </div>
//                 <div>
//                   <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Location</label>
//                   <input
//                     name="location"
//                     placeholder="Location"
//                     value={college.location}
//                     onChange={(e) => handleNestedChange('collegeDetails', idx, e)}
//                     style={{
//                       width: '100%',
//                       padding: '0.5rem',
//                       borderRadius: '4px',
//                       border: '1px solid #ddd',
//                       fontSize: '14px'
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </section>

//         <section style={{
//           backgroundColor: 'white',
//           padding: '1.5rem',
//           borderRadius: '8px',
//           boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//           marginBottom: '2rem'
//         }}>
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
//             <h2 style={{ color: '#3498db' }}>Experience</h2>
//             <button
//               onClick={() => addEntry('experience')}
//               style={{
//                 backgroundColor: '#3498db',
//                 color: 'white',
//                 border: 'none',
//                 padding: '0.5rem 1rem',
//                 borderRadius: '4px',
//                 cursor: 'pointer',
//                 fontSize: '14px'
//               }}
//             >
//               Add Experience
//             </button>
//           </div>
//           {formData.experience.map((exp, idx) => (
//             <div key={idx} style={{
//               border: '1px solid #eee',
//               padding: '1rem',
//               borderRadius: '6px',
//               marginBottom: '1rem',
//               position: 'relative'
//             }}>
//               <button
//                 type="button"
//                 onClick={() => removeEntry('experience', idx)}
//                 style={{
//                   position: 'absolute',
//                   top: '0.5rem',
//                   right: '0.5rem',
//                   backgroundColor: '#e74c3c',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '50%',
//                   width: '24px',
//                   height: '24px',
//                   cursor: 'pointer',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center'
//                 }}
//               >
//                 ×
//               </button>
//               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
//                 <div>
//                   <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Company</label>
//                   <input
//                     name="company"
//                     placeholder="Company"
//                     value={exp.company}
//                     onChange={(e) => handleNestedChange('experience', idx, e)}
//                     style={{
//                       width: '100%',
//                       padding: '0.5rem',
//                       borderRadius: '4px',
//                       border: '1px solid #ddd',
//                       fontSize: '14px'
//                     }}
//                   />
//                 </div>
//                 <div>
//                   <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Designation</label>
//                   <input
//                     name="designation"
//                     placeholder="Designation"
//                     value={exp.designation}
//                     onChange={(e) => handleNestedChange('experience', idx, e)}
//                     style={{
//                       width: '100%',
//                       padding: '0.5rem',
//                       borderRadius: '4px',
//                       border: '1px solid #ddd',
//                       fontSize: '14px'
//                     }}
//                   />
//                 </div>
//               </div>
//               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
//                 <div>
//                   <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Year</label>
//                   <input
//                     name="year"
//                     placeholder="Year"
//                     value={exp.year}
//                     onChange={(e) => handleNestedChange('experience', idx, e)}
//                     style={{
//                       width: '100%',
//                       padding: '0.5rem',
//                       borderRadius: '4px',
//                       border: '1px solid #ddd',
//                       fontSize: '14px'
//                     }}
//                   />
//                 </div>
//                 <div>
//                   <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Location</label>
//                   <input
//                     name="location"
//                     placeholder="Location"
//                     value={exp.location}
//                     onChange={(e) => handleNestedChange('experience', idx, e)}
//                     style={{
//                       width: '100%',
//                       padding: '0.5rem',
//                       borderRadius: '4px',
//                       border: '1px solid #ddd',
//                       fontSize: '14px'
//                     }}
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
//                   Work Summary (Use "//" after each bullet point)
//                 </label>
//                 <p style={{ fontSize: '12px', color: '#7f8c8d', marginBottom: '0.5rem' }}>
//                   Example: Led a team of 5 engineers//Improved performance by 30%//Mentored junior engineers
//                 </p>
//                 <textarea
//                   name="workSummary"
//                   placeholder="Work Summary"
//                   value={exp.workSummary}
//                   onChange={(e) => handleNestedChange('experience', idx, e)}
//                   style={{
//                     width: '100%',
//                     padding: '0.5rem',
//                     borderRadius: '4px',
//                     border: '1px solid #ddd',
//                     fontSize: '14px',
//                     minHeight: '100px'
//                   }}
//                 />
//               </div>
//             </div>
//           ))}
//         </section>

//         <section style={{
//           backgroundColor: 'white',
//           padding: '1.5rem',
//           borderRadius: '8px',
//           boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//           marginBottom: '2rem'
//         }}>
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
//             <h2 style={{ color: '#3498db' }}>Projects</h2>
//             <button
//               onClick={() => addEntry('projects')}
//               style={{
//                 backgroundColor: '#3498db',
//                 color: 'white',
//                 border: 'none',
//                 padding: '0.5rem 1rem',
//                 borderRadius: '4px',
//                 cursor: 'pointer',
//                 fontSize: '14px'
//               }}
//             >
//               Add Project
//             </button>
//           </div>
//           {formData.projects.map((proj, idx) => (
//             <div key={idx} style={{
//               border: '1px solid #eee',
//               padding: '1rem',
//               borderRadius: '6px',
//               marginBottom: '1rem',
//               position: 'relative'
//             }}>
//               <button
//                 type="button"
//                 onClick={() => removeEntry('projects', idx)}
//                 style={{
//                   position: 'absolute',
//                   top: '0.5rem',
//                   right: '0.5rem',
//                   backgroundColor: '#e74c3c',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '50%',
//                   width: '24px',
//                   height: '24px',
//                   cursor: 'pointer',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center'
//                 }}
//               >
//                 ×
//               </button>
//               <div style={{ marginBottom: '1rem' }}>
//                 <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Project Name</label>
//                 <input
//                   name="projectName"
//                   placeholder="Project Name"
//                   value={proj.projectName}
//                   onChange={(e) => handleNestedChange('projects', idx, e)}
//                   style={{
//                     width: '100%',
//                     padding: '0.5rem',
//                     borderRadius: '4px',
//                     border: '1px solid #ddd',
//                     fontSize: '14px'
//                   }}
//                 />
//               </div>
//               <div style={{ marginBottom: '1rem' }}>
//                 <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Tools (comma separated)</label>
//                 <input
//                   name="tools"
//                   placeholder="Tools (comma separated)"
//                   value={proj.tools.join(', ')}
//                   onChange={(e) => {
//                     const toolsArray = e.target.value.split(',').map(tool => tool.trim());
//                     const updated = [...formData.projects];
//                     updated[idx].tools = toolsArray;
//                     setFormData(prev => ({ ...prev, projects: updated }));
//                   }}
//                   style={{
//                     width: '100%',
//                     padding: '0.5rem',
//                     borderRadius: '4px',
//                     border: '1px solid #ddd',
//                     fontSize: '14px'
//                   }}
//                 />
//               </div>
//               <div>
//                 <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
//                   Project Summary (Use "//" after each bullet point)
//                 </label>
//                 <p style={{ fontSize: '12px', color: '#7f8c8d', marginBottom: '0.5rem' }}>
//                   Example: Built a full-stack e-commerce application//Implemented JWT authentication//Deployed on AWS
//                 </p>
//                 <textarea
//                   name="summary"
//                   placeholder="Project Summary"
//                   value={proj.summary}
//                   onChange={(e) => handleNestedChange('projects', idx, e)}
//                   style={{
//                     width: '100%',
//                     padding: '0.5rem',
//                     borderRadius: '4px',
//                     border: '1px solid #ddd',
//                     fontSize: '14px',
//                     minHeight: '100px'
//                   }}
//                 />
//               </div>
//             </div>
//           ))}
//         </section>

//         <section style={{
//           backgroundColor: 'white',
//           padding: '1.5rem',
//           borderRadius: '8px',
//           boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//           marginBottom: '2rem'
//         }}>
//           <h2 style={{ color: '#3498db', marginBottom: '1rem' }}>Skills</h2>
//           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
//             <div>
//               <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Programming Languages</label>
//               <input
//                 placeholder="JavaScript, TypeScript, Python"
//                 onChange={(e) => handleListChange('programmingLanguages', e.target.value)}
//                 style={{
//                   width: '100%',
//                   padding: '0.5rem',
//                   borderRadius: '4px',
//                   border: '1px solid #ddd',
//                   fontSize: '14px'
//                 }}
//               />
//             </div>
//             <div>
//               <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Libraries/Frameworks</label>
//               <input
//                 placeholder="React, Node.js, Express"
//                 onChange={(e) => handleListChange('libraries', e.target.value)}
//                 style={{
//                   width: '100%',
//                   padding: '0.5rem',
//                   borderRadius: '4px',
//                   border: '1px solid #ddd',
//                   fontSize: '14px'
//                 }}
//               />
//             </div>
//           </div>
//           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
//             <div>
//               <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Tools</label>
//               <input
//                 placeholder="Git, Docker, Kubernetes"
//                 onChange={(e) => handleListChange('tools', e.target.value)}
//                 style={{
//                   width: '100%',
//                   padding: '0.5rem',
//                   borderRadius: '4px',
//                   border: '1px solid #ddd',
//                   fontSize: '14px'
//                 }}
//               />
//             </div>
//             <div>
//               <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Databases</label>
//               <input
//                 placeholder="MongoDB, PostgreSQL"
//                 onChange={(e) => handleListChange('database', e.target.value)}
//                 style={{
//                   width: '100%',
//                   padding: '0.5rem',
//                   borderRadius: '4px',
//                   border: '1px solid #ddd',
//                   fontSize: '14px'
//                 }}
//               />
//             </div>
//           </div>
//           <div style={{ marginTop: '1rem' }}>
//             <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Cloud Services</label>
//             <input
//               placeholder="AWS, Azure, Google Cloud"
//               onChange={(e) => handleListChange('cloudServices', e.target.value)}
//               style={{
//                 width: '100%',
//                 padding: '0.5rem',
//                 borderRadius: '4px',
//                 border: '1px solid #ddd',
//                 fontSize: '14px'
//               }}
//             />
//           </div>
//         </section>

//         <section style={{
//           backgroundColor: 'white',
//           padding: '1.5rem',
//           borderRadius: '8px',
//           boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//           marginBottom: '2rem'
//         }}>
//           <h2 style={{ color: '#3498db', marginBottom: '1rem' }}>Achievements</h2>
//           <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
//             Achievements (Use "//" after each bullet point)
//           </label>
//           <p style={{ fontSize: '12px', color: '#7f8c8d', marginBottom: '0.5rem' }}>
//             Example: Google Developer Expert award 2022//Microsoft MVP 2019//Hackathon winner
//           </p>
//           <textarea
//             placeholder="Enter achievements separated by commas"
//             onChange={(e) => handleAchievementsChange(e.target.value)}
//             style={{
//               width: '100%',
//               padding: '0.5rem',
//               borderRadius: '4px',
//               border: '1px solid #ddd',
//               fontSize: '14px',
//               minHeight: '100px'
//             }}
//           />
//         </section>

//         <button
//           onClick={handleSubmit}
//           style={{
//             backgroundColor: '#2ecc71',
//             color: 'white',
//             border: 'none',
//             padding: '0.75rem 1.5rem',
//             borderRadius: '4px',
//             cursor: 'pointer',
//             fontSize: '16px',
//             fontWeight: '500',
//             width: '100%'
//           }}
//         >
//           Generate Resume PDF
//         </button>
//       </div>

//       {/* Preview Column */}
//       <div style={{
//         padding: '2rem',
//         backgroundColor: '#f8f9fa',
//         overflowY: 'auto',
//         height: '100vh',
//         borderLeft: '1px solid #ddd'
//       }}>
//         <ResumePreview formData={formData} />
//       </div>
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import ResumePreview from './ResumePreview';

type College = {
  collegeName: string;
  courseName: string;
  year: string;
  location: string;
};

type Experience = {
  company: string;
  designation: string;
  year: string;
  location: string;
  workSummary: string;
};

type Project = {
  projectName: string;
  tools: string[];
  summary: string;
};

type Skills = {
  programmingLanguages: string[];
  libraries: string[];
  tools: string[];
  database: string[];
  cloudServices: string[];
};

type FormDataType = {
  fullName: string;
  title: string;
  email: string;
  phoneNo: string;
  linkedInLink: string;
  gitHub: string;
  collegeDetails: College[];
  experience: Experience[];
  projects: Project[];
  skills: Skills;
  achievements: string[];
};

export default function ResumeForm() {
  const [formData, setFormData] = useState<FormDataType>({
    fullName: "",
    title: "",
    email: "",
    phoneNo: "",
    linkedInLink: "",
    gitHub: "",
    collegeDetails: [{ collegeName: "", courseName: "", year: "", location: "" }],
    experience: [{ company: "", designation: "", year: "", location: "", workSummary: "" }],
    projects: [{ projectName: "", tools: [], summary: "" }],
    skills: {
      programmingLanguages: [],
      libraries: [],
      tools: [],
      database: [],
      cloudServices: []
    },
    achievements: []
  });

  const [isPreviewVisible, setIsPreviewVisible] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNestedChange = (section: string, index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updated = [...(formData as any)[section]];
    updated[index][name] = value;
    setFormData(prev => ({ ...prev, [section]: updated }));
  };

  const addEntry = (section: 'collegeDetails' | 'experience' | 'projects') => {
    const emptyEntries: any = {
      collegeDetails: { collegeName: "", courseName: "", year: "", location: "" },
      experience: { company: "", designation: "", year: "", location: "", workSummary: "" },
      projects: { projectName: "", tools: [], summary: "" }
    };
    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], emptyEntries[section]]
    }));
  };

  const removeEntry = (
    section: 'collegeDetails' | 'experience' | 'projects',
    index: number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
  };

  const handleListChange = (category: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: value.split(',').map((item) => item.trim())
      }
    }));
  };

  const handleAchievementsChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      achievements: value.split(',').map((item) => item.trim())
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/generate-resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      if (!res.ok) {
        throw new Error('Failed to generate PDF')
      }
      const blob = await res.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'resume.pdf';
      document.body.appendChild(link)
      link.click()
      link.remove()
      URL.revokeObjectURL(url)
    } catch (err) {
      console.error('Error generating resume:', err);
    }
  }

  return (
    <div className="resume-builder-container">
      {/* Form Column */}
      <div className="form-column">
        <div className="mobile-preview-toggle">
          <button 
            onClick={() => setIsPreviewVisible(!isPreviewVisible)}
            className="toggle-preview-btn"
          >
            {isPreviewVisible ? 'Hide Preview' : 'Show Preview'}
          </button>
        </div>

        <h1 className="form-title">Resume Builder</h1>

        <section className="form-section">
          <h2 className="section-title">Basic Info</h2>
          <div className="grid-2-col">
            <div className="form-group">
              <label>Full Name</label>
              <input
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Title</label>
              <input
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid-2-col">
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Phone No</label>
              <input
                name="phoneNo"
                placeholder="Phone No"
                value={formData.phoneNo}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid-2-col">
            <div className="form-group">
              <label>LinkedIn URL</label>
              <input
                name="linkedInLink"
                placeholder="LinkedIn URL"
                value={formData.linkedInLink}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>GitHub URL</label>
              <input
                name="gitHub"
                placeholder="GitHub URL"
                value={formData.gitHub}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>

        <section className="form-section">
          <div className="section-header">
            <h2 className="section-title">Education</h2>
            <button
              onClick={() => addEntry('collegeDetails')}
              className="add-btn"
            >
              Add Education
            </button>
          </div>
          {formData.collegeDetails.map((college, idx) => (
            <div key={idx} className="entry-container">
              <button
                type="button"
                onClick={() => removeEntry('collegeDetails', idx)}
                className="remove-btn"
              >
                ×
              </button>
              <div className="grid-2-col">
                <div className="form-group">
                  <label>College Name</label>
                  <input
                    name="collegeName"
                    placeholder="College Name"
                    value={college.collegeName}
                    onChange={(e) => handleNestedChange('collegeDetails', idx, e)}
                  />
                </div>
                <div className="form-group">
                  <label>Course</label>
                  <input
                    name="courseName"
                    placeholder="Course"
                    value={college.courseName}
                    onChange={(e) => handleNestedChange('collegeDetails', idx, e)}
                  />
                </div>
              </div>
              <div className="grid-2-col">
                <div className="form-group">
                  <label>Year</label>
                  <input
                    name="year"
                    placeholder="Year"
                    value={college.year}
                    onChange={(e) => handleNestedChange('collegeDetails', idx, e)}
                  />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input
                    name="location"
                    placeholder="Location"
                    value={college.location}
                    onChange={(e) => handleNestedChange('collegeDetails', idx, e)}
                  />
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="form-section">
          <div className="section-header">
            <h2 className="section-title">Experience</h2>
            <button
              onClick={() => addEntry('experience')}
              className="add-btn"
            >
              Add Experience
            </button>
          </div>
          {formData.experience.map((exp, idx) => (
            <div key={idx} className="entry-container">
              <button
                type="button"
                onClick={() => removeEntry('experience', idx)}
                className="remove-btn"
              >
                ×
              </button>
              <div className="grid-2-col">
                <div className="form-group">
                  <label>Company</label>
                  <input
                    name="company"
                    placeholder="Company"
                    value={exp.company}
                    onChange={(e) => handleNestedChange('experience', idx, e)}
                  />
                </div>
                <div className="form-group">
                  <label>Designation</label>
                  <input
                    name="designation"
                    placeholder="Designation"
                    value={exp.designation}
                    onChange={(e) => handleNestedChange('experience', idx, e)}
                  />
                </div>
              </div>
              <div className="grid-2-col">
                <div className="form-group">
                  <label>Year</label>
                  <input
                    name="year"
                    placeholder="Year"
                    value={exp.year}
                    onChange={(e) => handleNestedChange('experience', idx, e)}
                  />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input
                    name="location"
                    placeholder="Location"
                    value={exp.location}
                    onChange={(e) => handleNestedChange('experience', idx, e)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>
                  Work Summary (Use "//" after each bullet point)
                </label>
                <p className="input-hint">
                  Example: Led a team of 5 engineers//Improved performance by 30%//Mentored junior engineers
                </p>
                <textarea
                  name="workSummary"
                  placeholder="Work Summary"
                  value={exp.workSummary}
                  onChange={(e) => handleNestedChange('experience', idx, e)}
                />
              </div>
            </div>
          ))}
        </section>

        <section className="form-section">
          <div className="section-header">
            <h2 className="section-title">Projects</h2>
            <button
              onClick={() => addEntry('projects')}
              className="add-btn"
            >
              Add Project
            </button>
          </div>
          {formData.projects.map((proj, idx) => (
            <div key={idx} className="entry-container">
              <button
                type="button"
                onClick={() => removeEntry('projects', idx)}
                className="remove-btn"
              >
                ×
              </button>
              <div className="form-group">
                <label>Project Name</label>
                <input
                  name="projectName"
                  placeholder="Project Name"
                  value={proj.projectName}
                  onChange={(e) => handleNestedChange('projects', idx, e)}
                />
              </div>
              <div className="form-group">
                <label>Tools (comma separated)</label>
                <input
                  name="tools"
                  placeholder="Tools (comma separated)"
                  value={proj.tools.join(', ')}
                  onChange={(e) => {
                    const toolsArray = e.target.value.split(',').map(tool => tool.trim());
                    const updated = [...formData.projects];
                    updated[idx].tools = toolsArray;
                    setFormData(prev => ({ ...prev, projects: updated }));
                  }}
                />
              </div>
              <div className="form-group">
                <label>
                  Project Summary (Use "//" after each bullet point)
                </label>
                <p className="input-hint">
                  Example: Built a full-stack e-commerce application//Implemented JWT authentication//Deployed on AWS
                </p>
                <textarea
                  name="summary"
                  placeholder="Project Summary"
                  value={proj.summary}
                  onChange={(e) => handleNestedChange('projects', idx, e)}
                />
              </div>
            </div>
          ))}
        </section>

        <section className="form-section">
          <h2 className="section-title">Skills</h2>
          <div className="grid-2-col">
            <div className="form-group">
              <label>Programming Languages</label>
              <input
                placeholder="JavaScript, TypeScript, Python"
                onChange={(e) => handleListChange('programmingLanguages', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Libraries/Frameworks</label>
              <input
                placeholder="React, Node.js, Express"
                onChange={(e) => handleListChange('libraries', e.target.value)}
              />
            </div>
          </div>
          <div className="grid-2-col">
            <div className="form-group">
              <label>Tools</label>
              <input
                placeholder="Git, Docker, Kubernetes"
                onChange={(e) => handleListChange('tools', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Databases</label>
              <input
                placeholder="MongoDB, PostgreSQL"
                onChange={(e) => handleListChange('database', e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Cloud Services</label>
            <input
              placeholder="AWS, Azure, Google Cloud"
              onChange={(e) => handleListChange('cloudServices', e.target.value)}
            />
          </div>
        </section>

        <section className="form-section">
          <h2 className="section-title">Achievements</h2>
          <label className="form-group">
            Achievements (Use "//" after each bullet point)
          </label>
          <p className="input-hint">
            Example: Google Developer Expert award 2022//Microsoft MVP 2019//Hackathon winner
          </p>
          <textarea
            placeholder="Enter achievements separated by commas"
            onChange={(e) => handleAchievementsChange(e.target.value)}
          />
        </section>

        <button
          onClick={handleSubmit}
          className="generate-btn"
        >
          Generate Resume PDF
        </button>
      </div>

      {/* Preview Column */}
      <div className={`preview-column ${isPreviewVisible ? 'visible' : 'hidden'}`}>
        <ResumePreview formData={formData} />
      </div>

      <style jsx>{`
        .resume-builder-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          font-family: 'Segoe UI', sans-serif;
        }
        
        .form-column {
          padding: 1.5rem;
          background-color: #f8f9fa;
          order: 1;
        }
        
        .preview-column {
          padding: 1.5rem;
          background-color: #f8f9fa;
          border-top: 1px solid #ddd;
          order: 2;
        }
        
        .form-title {
          color: #2c3e50;
          margin-bottom: 1.5rem;
          font-size: 1.8rem;
          border-bottom: 2px solid #3498db;
          padding-bottom: 0.5rem;
        }
        
        .form-section {
          background-color: white;
          padding: 1.25rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          margin-bottom: 1.5rem;
        }
        
        .section-title {
          color: #3498db;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .form-group {
          margin-bottom: 1rem;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          font-size: 0.9rem;
        }
        
        .input-hint {
          font-size: 0.75rem;
          color: #7f8c8d;
          margin-bottom: 0.5rem;
        }
        
        input, textarea {
          width: 100%;
          padding: 0.6rem;
          border-radius: 4px;
          border: 1px solid #ddd;
          font-size: 0.9rem;
        }
        
        textarea {
          min-height: 80px;
        }
        
        .grid-2-col {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .entry-container {
          border: 1px solid #eee;
          padding: 1rem;
          border-radius: 6px;
          margin-bottom: 1rem;
          position: relative;
        }
        
        .add-btn {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9rem;
          white-space: nowrap;
        }
        
        .remove-btn {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background-color: #e74c3c;
          color: white;
          border: none;
          border-radius: 50%;
          width: 22px;
          height: 22px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
        }
        
        .generate-btn {
          background-color: #2ecc71;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 500;
          width: 100%;
          margin-top: 1rem;
        }
        
        .mobile-preview-toggle {
          display: block;
          margin-bottom: 1rem;
        }
        
        .toggle-preview-btn {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9rem;
          width: 100%;
        }
        
        .preview-column.hidden {
          display: none;
        }
        
        @media (min-width: 768px) {
          .resume-builder-container {
            flex-direction: row;
          }
          
          .form-column {
            flex: 1;
            max-width: 50%;
            height: 100vh;
            overflow-y: auto;
            order: 1;
          }
          
          .preview-column {
            flex: 1;
            max-width: 50%;
            height: 100vh;
            overflow-y: auto;
            border-left: 1px solid #ddd;
            border-top: none;
            order: 2;
          }
          
          .grid-2-col {
            grid-template-columns: 1fr 1fr;
          }
          
          .mobile-preview-toggle {
            display: none;
          }
          
          .preview-column.hidden {
            display: block;
          }
        }
        
        @media (min-width: 992px) {
          .form-column {
            padding: 2rem;
          }
          
          .preview-column {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
}