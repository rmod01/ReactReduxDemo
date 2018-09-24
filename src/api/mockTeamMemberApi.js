import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const teammembers = [
  {
    id: "A0001",
    title: "Team Member Name 1",
    watchHref: "",
    ProjectCodeId: "Project Code# 1",
    length: "Developer",
    category: "Vendor A"
  },
  {
    id: "A0002",
    title: "Team Member Name 2",
    watchHref: "",
    ProjectCodeId: "Project Code# 2",
    length: "Tester",
    category: "Vendor A"
  },
  {
    id: "A0003",
    title: "Team Member Name 3",
    watchHref: "",
    ProjectCodeId: "Project Code# 3",
    length: "Tech Lead",
    category: "Permanent"
  },
  {
    id: "A0004",
    title: "Team Member Name 4",
    watchHref: "",
    ProjectCodeId: "Project Code# 4",
    length: "Designer",
    category: "Vendor B"
  },
  {
    id: "A0005",
    title: "Team Member Name 5",
    watchHref: "",
    ProjectCodeId: "Project Code# 5",
    length: "People Manager",
    category: "Permanent"
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
        const minTeamMemberTitleLength = 2;
        if (teammember.title.length < minTeamMemberTitleLength) {
          reject(`Name must be at least ${minTeamMemberTitleLength} characters.`);
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
