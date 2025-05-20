export function validateTeamName(name) {
    if (!name || name.trim().length === 0) {
        return { valid: false, message: "Team name is required." };
    }
    if (name.length < 3) {
        return { valid: false, message: "Team name must be at least 3 characters long." };
    }
    return { valid: true };
}

export function validateSkillLevel(level) {
    const validLevels = ["beginner", "intermediate", "advanced"];
    if (!validLevels.includes(level)) {
        return { valid: false, message: "Skill level must be one of: beginner, intermediate, advanced." };
    }
    return { valid: true };
}

export function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return { valid: false, message: "Invalid email format." };
    }
    return { valid: true };
}

export function validateCollaborationMetrics(metrics) {
    if (!metrics || typeof metrics !== 'object') {
        return { valid: false, message: "Collaboration metrics must be an object." };
    }
    // Add additional validation logic as needed
    return { valid: true };
}