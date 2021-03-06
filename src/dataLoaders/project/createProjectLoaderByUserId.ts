import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { Project } from "../../database/entities/project";
import { User } from "../../database/entities/user";

// naming based on output (what it loads), not on input
export function createProjectLoaderByUserId() {
    return new DataLoader<number, Project[]>(async (userIds) => {
        const userWithAttachedProjects = await getRepository(User).findByIds(userIds as number[], {
            relations: ["projects"],
        });
        return userWithAttachedProjects.map((a) => a.projects);
    });
}
