import { ApiService, type ApiConfig } from "./abstracts";
import type { Language } from "@/types";

class DYouthAnnouncementsService extends ApiService {
  public async getAnnouncements(config: ApiConfig): Promise<Announcement> {
    return this.get<Announcement>("/announcements", config);
  }
}

export interface AnnouncementItem {
  id: string;
  title: string;
  body: string;
  editorMode?: "VISUAL" | "HTML";
  button?: {
    title: string;
    url: string;
  };
}

export interface Announcement {
  language: Language;
  announcements: AnnouncementItem[];
  createdAt: string;
  updatedAt: string;
}

const instance = new DYouthAnnouncementsService();
export {
  instance as DYouthAnnouncementsService,
}
