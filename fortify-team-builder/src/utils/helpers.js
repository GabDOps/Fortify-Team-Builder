// src/utils/helpers.js

export function calculateSkillGap(teamMembers, requiredSkills) {
    const skillGap = {};
    teamMembers.forEach(member => {
        member.skills.forEach(skill => {
            if (!requiredSkills.includes(skill)) {
                skillGap[skill] = (skillGap[skill] || 0) + 1;
            }
        });
    });
    return skillGap;
}

export function generateTeamReport(teams) {
    return teams.map(team => ({
        teamName: team.name,
        memberCount: team.members.length,
        skillSet: team.members.flatMap(member => member.skills),
    }));
}

export function findCollaborationOpportunities(teams) {
    const opportunities = [];
    teams.forEach((teamA, index) => {
        teams.slice(index + 1).forEach(teamB => {
            const commonMembers = teamA.members.filter(member => teamB.members.includes(member));
            if (commonMembers.length > 0) {
                opportunities.push({
                    teams: [teamA.name, teamB.name],
                    commonMembers: commonMembers.map(member => member.name),
                });
            }
        });
    });
    return opportunities;
}