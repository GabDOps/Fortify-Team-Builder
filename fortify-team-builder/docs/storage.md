# Fortify Team Builder (Enterprise) - Data Storage Schema

## Overview

The application uses **IndexedDB** for structured, offline-first data storage and **LocalStorage** for lightweight preferences and UI state. The schema is designed for scalability, supporting complex organizational structures and analytics.

---

## 1. IndexedDB Schema

### 1.1 Database: `fortifyTeamBuilderDB`
- **Version:** 1

### 1.2 Object Stores

#### 1.2.1 `teams`
| Field         | Type     | Description                                 |
|---------------|----------|---------------------------------------------|
| id            | string   | Unique team ID (UUID)                       |
| name          | string   | Team name                                   |
| type          | string   | 'tribe', 'squad', 'chapter', 'coe'          |
| parentId      | string   | Parent team ID (nullable)                   |
| description   | string   | Team description                            |
| members       | array    | Array of member IDs                         |
| createdAt     | datetime | Creation timestamp                          |
| updatedAt     | datetime | Last update timestamp                       |

#### 1.2.2 `members`
| Field         | Type     | Description                                 |
|---------------|----------|---------------------------------------------|
| id            | string   | Unique member ID (UUID)                     |
| name          | string   | Full name                                   |
| email         | string   | Email address                               |
| role          | string   | Role/title                                  |
| skills        | array    | Array of skill objects                      |
| teams         | array    | Array of team IDs                           |
| metadata      | object   | Additional info (custom fields)             |
| createdAt     | datetime | Creation timestamp                          |
| updatedAt     | datetime | Last update timestamp                       |

#### 1.2.3 `skills`
| Field         | Type     | Description                                 |
|---------------|----------|---------------------------------------------|
| id            | string   | Unique skill ID (UUID)                      |
| name          | string   | Skill name                                  |
| category      | string   | Skill category                              |
| description   | string   | Description                                 |
| metrics       | object   | Customizable metrics (e.g., proficiency)    |

#### 1.2.4 `collaborations`
| Field         | Type     | Description                                 |
|---------------|----------|---------------------------------------------|
| id            | string   | Unique collaboration ID (UUID)              |
| sourceTeamId  | string   | Initiating team ID                          |
| targetTeamId  | string   | Receiving team ID                           |
| type          | string   | Collaboration type (e.g., project, support) |
| metrics       | object   | Collaboration metrics (frequency, quality)  |
| notes         | string   | Additional notes                            |
| createdAt     | datetime | Creation timestamp                          |
| updatedAt     | datetime | Last update timestamp                       |

#### 1.2.5 `reports`
| Field         | Type     | Description                                 |
|---------------|----------|---------------------------------------------|
| id            | string   | Unique report ID (UUID)                     |
| type          | string   | Report type (synergy, skill gap, etc.)      |
| data          | object   | Report data (JSON)                          |
| generatedAt   | datetime | Generation timestamp                        |

---

## 2. LocalStorage Schema

| Key                        | Type     | Description                        |
|----------------------------|----------|------------------------------------|
| `userPreferences`          | object   | Theme, language, layout, etc.      |
| `lastVisitedView`          | string   | Last active view/page              |
| `onboardingComplete`       | boolean  | Onboarding status                  |
| `uiState`                  | object   | Sidebar, modals, etc.              |

---

## 3. Relationships

- **teams.members**: Array of member IDs (references `members.id`)
- **members.teams**: Array of team IDs (references `teams.id`)
- **collaborations.sourceTeamId/targetTeamId**: References `teams.id`
- **skills**: Referenced in `members.skills` as objects with proficiency/metrics

---

## 4. Notes

- All IDs are UUIDs for uniqueness.
- Timestamps are stored as ISO 8601 strings.
- The schema is extensible for future analytics, integrations, or custom fields.

---

*Document Status: Draft v1.0*  
*Last Updated: May 20, 2025*