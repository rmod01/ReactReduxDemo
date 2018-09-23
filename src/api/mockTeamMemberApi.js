import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const teammembers = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    ProjectCodeId: "cory-house",
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    ProjectCodeId: "cory-house",
    length: "3:10",
    category: "Software Practices"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    ProjectCodeId: "cory-house",
    length: "2:52",
    category: "Software Architecture"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
    ProjectCodeId: "cory-house",
    length: "2:30",
    category: "Career"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    ProjectCodeId: "cory-house",
    length: "5:10",
    category: "HTML5"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (teammember) => {
  return replaceAll(teammember.title, ' ', '-');
};

class TeamMemberApi {
  static getAllTeamMembers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], teammembers));
      }, delay);
    });
  }

  static saveTeamMember(teammember) {
    teammember = Object.assign({}, teammember); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minTeamMemberTitleLength = 1;
        if (teammember.title.length < minTeamMemberTitleLength) {
          reject(`Title must be at least ${minTeamMemberTitleLength} characters.`);
        }

        if (teammember.id) {
          const existingTeamMemberIndex = teammembers.findIndex(a => a.id == teammember.id);
          teammembers.splice(existingTeamMemberIndex, 1, teammember);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          teammember.id = generateId(teammember);
          teammember.watchHref = `http://www.pluralsight.com/courses/${teammember.id}`;
          teammembers.push(teammember);
        }

        resolve(teammember);
      }, delay);
    });
  }

  static deleteTeamMember(teammemberId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfTeamMemberToDelete = teammembers.findIndex(teammember => {
          teammember.id == teammemberId;
        });
        teammembers.splice(indexOfTeamMemberToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default TeamMemberApi;
