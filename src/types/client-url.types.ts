export interface TClientUrl {
  /**
   * Get url of the page jesus
   * @returns /jesus
   */
  jesus: string;
  /**
   * Get url of the page church
   * @returns /church
   */
  church: string;
  /**
   * Get url of the page contacts
   * @returns /contacts
   */
  contacts: string;
  /**
   * Get url of the page ministry
   * @returns /ministry
   */
  ministry: string;
  /**
   * Get the anchor of the block video
   */
  video: string;
  /**
   * Get url of the page donate
   * @param domainName - The domain name
   * @returns https://donate.{{name_domain}}.com.ua/ministries
   */
  donate: (domainName: string) => string;
  /**
   * Get url of the page donate
   * @returns /donate-transfer
   */
  donateTransfer: string;
  /**
   * Get url of the page donate
   * @param domainName - The domain name
   * @returns https://donate.{{name_domain}}.com.ua/donation/ua
   */
  donateUA: (domainName: string) => string;
  /**
   * Get url of the page donate
   * @param domainName - The domain name
   * @returns https://donate.{{name_domain}}.com.ua/donation/usa
   */
  donateUSA: (domainName: string) => string;
  /**
   * Get url of the page event
   * @returns /event
   */
  event: string;
  /**
   * Get url of the page instagram
   * @returns https://www.instagram.com/d.church.lviv?igsh=Z2MzNmRjY2V3MXNm
   */
  instagram: string;
  /**
   * Get url of the page facebook
   * @returns https://www.facebook.com/d.church.lviv
   */
  facebook: string;
  /**
   * Get url of the page youtube
   * @returns https://youtube.com/@LvivSpringofLife?si=VQvEUFAdMM7NUyws
   */
  youtube: string;
}
