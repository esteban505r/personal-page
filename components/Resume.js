import { useEffect } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const Resume = () => {
  useEffect(() => {
    document.querySelectorAll(".progress_inner").forEach(function (progress) {
      var pValue = parseInt(progress.dataset.value, 10);
      var pColor = progress.dataset.color;
      var pBarWrap = progress.querySelector(".bar");
      var pBar = progress.querySelector(".bar_in");
      var number = progress.querySelector(".number");
      var label = progress.querySelector(".label");

      number.style.right = 100 - pValue + "%";

      setTimeout(function () {
        label.classList.add("opened");
      }, 500);

      pBar.style.width = pValue + "%";
      pBar.style.backgroundColor = pColor;

      setTimeout(function () {
        pBarWrap.classList.add("open");
      });
    });
  }, []);

  const educations = [
    {
      id: 1,
      subject: "Software Engineering",
      university: "Universidad Manuela Beltrán",
      desc: "Comprehensive study of software development, architecture, and engineering principles to create robust and scalable applications.",
      date: "2019 - Present",
    },
    {
      id: 2,
      subject: "Secondary Education",
      school: "Orlando Higuita Rojas",
      desc: "Focused on foundational academic skills and early exposure to technology.",
      date: "Graduated 2017",
    },
    {
      id: 3,
      subject: "Complementary Education",
      institution: "Various Platforms",
      desc: "Advanced professional courses in Kotlin, Flutter, Jetpack Compose, CI/CD, and multi-module architecture, taught by industry experts.",
      date: "Ongoing",
    },
  ];
  
  const experiences = [
    {
      id: 1,
      designation: "Software Engineer",
      company: "Belcorp",
      desc: "Developing a modern Android application using Jetpack Compose, Coroutines, MVI, and Clean Architecture. Responsible for implementing multi-module architecture for scalability and maintainability. Collaborate with global teams from India, Peru, and Mexico in an English-speaking environment to solve architectural challenges and design innovative solutions. Work on data-driven insights with Google Analytics and contribute to UI/UX design for an intuitive user experience.",
      date: "Jan/2023 - Present",
    },
    {
      id: 1,
      designation: "Frontend Engineer",
      company: "Tyba",
      desc: "Led the development of a financial web and mobile app with Flutter, achieving a 30% increase in user engagement and enhanced performance using Riverpod.",
      date: "Nov/2022 - Jun/2023",
    },
    {
      id: 2,
      designation: "Máster Engineer",
      company: "Interrapidisimo",
      desc: "Migrated technologies from Java to Kotlin and XML to Jetpack Compose, enhancing application efficiency by 20%. Collaborated with teams to optimize internal package delivery.",
      date: "Dec/2021 - Sep/2022",
    },
    {
      id: 3,
      designation: "FullStack Mobile Developer",
      company: "KUBO",
      desc: "Developed multiple Flutter Android apps for clients like Chevrolet and Herbalife, integrating advanced features and mentoring junior developers to boost team productivity.",
      date: "May/2020 - Dec/2021",
    },
    {
      id: 4,
      designation: "Junior Developer",
      company: "RFI Comunicaciones",
      desc: "Created a Vue.js-based inventory management system and a GPS-enabled Flutter app, improving inventory accuracy by 40%.",
      date: "Jan/2019 - Dec/2019",
    },
  ];
  
  const personalSkills = [
    { id: 1, title: "Problem Solving", value: "90" },
    { id: 2, title: "Time Management", value: "85" },
    { id: 3, title: "Team Leadership", value: "80" },
  ];
  
  const softwareSkills = [
    { id: 1, title: "Android Development", value: "95" },
    { id: 2, title: "Jetpack Compose", value: "90" },
    { id: 3, title: "Flutter", value: "90" },
    { id: 4, title: "Kotlin", value: "95" },
    { id: 5, title: "Docker", value: "85" },
    { id: 6, title: "React.js", value: "80" },
    { id: 7, title: "Nest.js", value: "75" },
    { id: 8, title: "Vue.js", value: "80" },
  ];
  
  const complementaryEducation = [
    {
      id: 1,
      title: "The Ultimate PL Course Bundle",
      provider: "Philip Lackner",
      desc: "Focused on KMM, CI/CD, multi-module architecture, Jetpack Compose, and Ktor.",
    },
    {
      id: 2,
      title: "Kotlin Expert",
      provider: "Antonio Leiva",
      desc: "Advanced Kotlin development taught by a Google Developer Expert.",
    },
    {
      id: 3,
      title: "Flutter: Guía Completa",
      provider: "Fernando Herrera",
      desc: "Complete Flutter development course covering core and advanced concepts.",
    },
    {
      id: 4,
      title: "Flutter Avanzado",
      provider: "Fernando Herrera",
      desc: "Advanced Flutter development focusing on complex app architectures.",
    },
  ];
  

  return (
    <div className="iknow_tm_resume">
      <div className="iknow_tm_main_title">
        <span>Resume</span>
        <h3>Combination of Skill &amp; Experience</h3>
      </div>
      <div className="resume_inner">
        <div className="left">
          <div className="info_list">
            <div className="iknow_tm_resume_title">
              <h3>Education</h3>
              <span className="shape" />
            </div>
            <ul>
              {educations.map((education) => (
                <li key={education.id}>
                  <div className="list_inner">
                    <div className="short">
                      <div className="job">
                        <h3>{education.subject}</h3>
                        <span>{education.university}</span>
                      </div>
                      <div className="year">
                        <span>{education.date}</span>
                      </div>
                    </div>
                    <div className="text">
                      <p>{education.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="info_list">
            <div className="iknow_tm_resume_title">
              <h3>Experience</h3>
              <span className="shape" />
            </div>
            <ul>
              {experiences.map((experience) => (
                <li key={experience.id}>
                  <div className="list_inner">
                    <div className="short">
                      <div className="job">
                        <h3>{experience.designation}</h3>
                        <span>{experience.company}</span>
                      </div>
                      <div className="year">
                        <span>{experience.date}</span>
                      </div>
                    </div>
                    <div className="text">
                      <p>{experience.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="skills_list">
            <div className="iknow_tm_resume_title">
              <h3>Personal Skills</h3>
              <span className="shape" />
            </div>
            <div className="personal">
              <div className="dodo_progress">
                {personalSkills.map((skill) => (
                  <div
                    className="progress_inner"
                    data-value={skill.value}
                    key={skill.id}
                  >
                    <span>
                      <span className="label">{skill.title}</span>
                      <span className="number">{skill.value}%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="skills_list">
            <div className="iknow_tm_resume_title">
              <h3>Software Skills</h3>
              <span className="shape" />
            </div>
            <div className="software">
              <div className="circular_progress_bar">
                <ul>
                  {softwareSkills.map((skill) => (
                    <li key={skill.id}>
                      <div className="list_inner">
                        <div className="myCircle" data-value="0.95">
                          <CircularProgressbar
                            value={skill.value}
                            strokeWidth={4}
                            styles={buildStyles({
                              // Colors
                              pathColor: "#ff451b",
                            })}
                          />
                          <h3 className="number">{skill.value}%</h3>
                        </div>
                        <div className="title">
                          <h3>{skill.title}</h3>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
