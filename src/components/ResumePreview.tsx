

import React from "react";

// Define precise types for form data
interface CollegeDetail {
  collegeName: string;
  courseName: string;
  year: string;
  location: string;
}
interface ExperienceItem {
  company: string;
  designation: string;
  year: string;
  location: string;
  workSummary: string;
}
interface ProjectItem {
  projectName: string;
  tools: string[];
  summary: string;
}
interface Skills {
  programmingLanguages: string[];
  libraries: string[];
  tools: string[];
  database: string[];
  cloudServices: string[];
}
interface ResumeFormData {
  fullName: string;
  title: string;
  email: string;
  phoneNo: string;
  linkedInLink: string;
  gitHub: string;
  collegeDetails: CollegeDetail[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: Skills;
  achievements: string[];
}

type Props = { formData: ResumeFormData };

export default function ResumePreview({ formData }: Props) {
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

  return (
    <div style={{
      fontFamily: "'Segoe UI', sans-serif",
      color: "#333",
      padding: "30px",
      maxWidth: "800px",
      margin: "0 auto",
      backgroundColor: "#fff"
    }}>
      {/* Header Section */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        borderBottom: "2px solid #000",
        paddingBottom: "10px",
        marginBottom: "12px"
      }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "24px" }}>{fullName}</h1>
          <p style={{ fontSize: "14px", marginTop: "4px" }}><strong>{title}</strong></p>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          fontSize: "12px",
          lineHeight: "1.4",
          textAlign: "right"
        }}>
          <p>{email}<br/>{phoneNo}</p>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "6px",
            marginTop: "6px"
          }}>
            <a href={linkedInLink} style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              textDecoration: "none",
              color: "#333",
              fontSize: "12px"
            }}>
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                width="16" 
                alt="LinkedIn Icon" 
                style={{ display: "inline-block" }}
              />
              <span>LinkedIn</span>
            </a>
            <a href={gitHub} style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              textDecoration: "none",
              color: "#333",
              fontSize: "12px"
            }}>
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                width="16" 
                alt="GitHub Icon" 
                style={{ display: "inline-block" }}
              />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div style={{ marginTop: "14px" }}>
        <h2 style={{
          fontSize: "16px",
          borderBottom: "1px solid #ccc",
          marginBottom: "8px",
          color: "#000"
        }}>Education</h2>
        {collegeDetails.map((c, i) => (
          <div key={i} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "10px"
          }}>
            <div style={{ flex: 1 }}>
              <strong style={{ fontSize: "14px" }}>{c.courseName}</strong>
              <p style={{ fontSize: "12px", marginTop: "2px" }}>{c.collegeName}</p>
            </div>
            <div style={{
              textAlign: "right",
              fontSize: "12px",
              minWidth: "100px"
            }}>
              <p>{c.year}</p>
              <p>{c.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Experience Section */}
      <div style={{ marginTop: "14px" }}>
        <h2 style={{
          fontSize: "16px",
          borderBottom: "1px solid #ccc",
          marginBottom: "8px",
          color: "#000"
        }}>Experience</h2>
        {experience.map((e, i) => (
          <div key={i} style={{ marginBottom: "12px" }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start"
            }}>
              <div>
                <strong style={{ fontSize: "14px" }}>{e.company}</strong>
                <p style={{ fontSize: "12px", marginTop: "2px" }}>{e.designation}</p>
              </div>
              <div style={{
                fontSize: "12px",
                textAlign: "right",
                whiteSpace: "nowrap"
              }}>
                <p>{e.location}</p>
                <p>{e.year}</p>
              </div>
            </div>
            <ul style={{
              paddingLeft: "20px",
              marginTop: "6px"
            }}>
              {e.workSummary
                .split('//')
                .map((line, idx) => line.trim())
                .filter(line => line.length > 0)
                .map((line, idx) => (
                  <li key={idx} style={{
                    fontSize: "12px",
                    lineHeight: "1.5",
                    marginBottom: "3px"
                  }}>{line}</li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div style={{ marginTop: "14px" }}>
        <h2 style={{
          fontSize: "16px",
          borderBottom: "1px solid #ccc",
          marginBottom: "8px",
          color: "#000"
        }}>Projects</h2>
        {projects.map((p, i) => (
          <div key={i} style={{ marginBottom: "10px" }}>
            <strong style={{
              display: "block",
              fontSize: "14px",
              marginBottom: "2px"
            }}>{p.projectName}</strong>
            <div style={{
              display: "flex",
              gap: "4px",
              alignItems: "center",
              fontSize: "10px"
            }}>
              <strong>Tools:</strong> <span>{p.tools.join(', ')}</span>
            </div>
            <ul style={{
              paddingLeft: "20px",
              marginTop: "6px"
            }}>
              {p.summary
                .split('//')
                .map((line, idx) => line.trim())
                .filter(line => line.length > 0)
                .map((line, idx) => (
                  <li key={idx} style={{
                    fontSize: "12px",
                    lineHeight: "1.5",
                    marginBottom: "3px"
                  }}>{line}</li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div style={{ marginTop: "14px" }}>
        <h2 style={{
          fontSize: "16px",
          borderBottom: "1px solid #ccc",
          marginBottom: "8px",
          color: "#000"
        }}>Skills</h2>
        <ul style={{
          paddingLeft: "20px",
          marginTop: "6px"
        }}>
          <li style={{
            fontSize: "12px",
            lineHeight: "1.5",
            marginBottom: "3px"
          }}><strong>Languages:</strong> {skills.programmingLanguages.join(', ')}</li>
          <li style={{
            fontSize: "12px",
            lineHeight: "1.5",
            marginBottom: "3px"
          }}><strong>Libraries/Frameworks:</strong> {skills.libraries.join(', ')}</li>
          <li style={{
            fontSize: "12px",
            lineHeight: "1.5",
            marginBottom: "3px"
          }}><strong>Tools:</strong> {skills.tools.join(', ')}</li>
          <li style={{
            fontSize: "12px",
            lineHeight: "1.5",
            marginBottom: "3px"
          }}><strong>Databases:</strong> {skills.database.join(', ')}</li>
          <li style={{
            fontSize: "12px",
            lineHeight: "1.5",
            marginBottom: "3px"
          }}><strong>Cloud Services:</strong> {skills.cloudServices.join(', ')}</li>
        </ul>
      </div>

      {/* Achievements Section */}
      <div style={{ marginTop: "14px" }}>
        <h2 style={{
          fontSize: "16px",
          borderBottom: "1px solid #ccc",
          marginBottom: "8px",
          color: "#000"
        }}>Achievements</h2>
        <ul style={{
          paddingLeft: "20px",
          marginTop: "6px"
        }}>
          {achievements
            .join('')
            .split('//')
            .map((a, idx) => a.trim())
            .filter(a => a.length > 0)
            .map((a, idx) => (
              <li key={idx} style={{
                fontSize: "12px",
                lineHeight: "1.5",
                marginBottom: "3px"
              }}>{a}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}