import LinkText from "@/app/components/link-text";

export const metadata = {
  title: "Skills | Kei Usami",
};

export default function Skills() {
  return (
    <main>
      <div className="flex flex-col items-center justify-between">
        <h1>Skills</h1>
      </div>
      <h2>Team Lead</h2>
      <h2>Project Management</h2>
      <h2>System Architecture Design</h2>
      <h2>Monitoring, Operations</h2>
      <h2>Backend</h2>
      <ul>
        <li>Python</li>
        <li>Django</li>
        <li>Go</li>
        <li>Node.js</li>
        <li>Express</li>
      </ul>
      <h2>Infrastructure, Cloud Architecture</h2>
      <ul>
        <li>AWS (<LinkText target url="https://www.credly.com/badges/8c3a6d3c-91c6-4f31-8c6f-e1004f8462ce" name="Certified Solutions Architect - Associate"></LinkText>) </li>
        <li>Terraform</li>
        <li>Docker</li>
      </ul>
      <h2>Frontend</h2>
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Next.js</li>
      </ul>
      <h2>Other</h2>
      <ul>
        <li>Git</li>
        <li>CI/CD</li>
        <li>DevOps</li>
        <li>OAuth2.0</li>
        <li>OpenID Connect, SSO</li>
      </ul>
    </main>
  );
}
