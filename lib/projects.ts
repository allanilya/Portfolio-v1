export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Codify AI",
    description: "AI-powered programming tutor leveraging AWS Bedrock (Claude 4.5 haiku), achieving 50% response time improvement through optimized prompt engineering, and LangChain-based agentic workflows.",
    techStack: ["React", "AWS Bedrock", "Flask", "DynamoDB", "Docker", "LangChain"],
    githubUrl: "https://github.com/allanilya/codify-ai",
    liveUrl: "https://codifyai.org"
  },
  // Add your projects here following the same format
  // Example:
  // {
  //   id: 2,
  //   title: "Your Project Name",
  //   description: "Brief description of your project",
  //   techStack: ["Tech1", "Tech2", "Tech3"],
  //   githubUrl: "https://github.com/yourusername/project",
  //   liveUrl: "https://yourproject.com" // optional
  // },
];
