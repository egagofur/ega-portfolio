export default interface Project {
  name: string;
  desc: string;
  date?: string | null;
  link: {
    demo: string | null;
    repo: string | null;
  };
  tech?: string[] | null;
  more?: string;
  disabled?: string;
}
