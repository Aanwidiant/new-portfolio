import {
    HeroContent,
    AboutContent,
    EduBackground,
    EmployHistory,
    BlogContent,
} from './content';
import { Profile } from './profile';
import { Services, Technologies, Project } from './project';

export interface ApiResponse {
    hero_content?: HeroContent;
    about_content?: AboutContent;
    edu_background?: EduBackground[];
    employ_history?: EmployHistory[];
    blogs_content?: BlogContent[];
    services?: Services[];
    technologies?: Technologies[];
    project_individual?: Project[];
    project_teams?: Project[];
    other_projects?: Project[];
    user?: Profile;
}
