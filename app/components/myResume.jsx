

export default function MyResume() {
  return <div id="resume-container">
    <div id="resume-side-section">
      <div id="contact-section">
        <h1>Paolo Frias</h1>
        <h3 class="bottom-sep">Software Engineer</h3>
        <p class="top-sep">paolo.b.frias@gmail.com</p>
        <p>443-910-6145</p>
        <p>Hanover, Maryland</p>
      </div>
      <div id="skills-section">
        <h2>Education</h2>
        <h3>University of Maryland, Baltimore County</h3>
        <p class="bottom-sep">(B.S. in Computer Science)</p>
        <p>Online Certificates: </p><span><p class="proper">Complete React Native and Redux Course (Udemy)</p></span>
        <h2>Skills</h2>
        <h3>Programming Languages</h3>
        <p>Python, Golang, Javascript, C#</p>
        <h3 class="top-sep">Frameworks and Libraries</h3>
        <p>pytest, Django, GRPC framework, React, React-Native, Xamarin</p>
        <h3 class="top-sep">Tools</h3>
        <p>Hashicorp Suite (Terraform, Nomad, Vault), Amazon Web Services,  Git</p>
      </div>
    </div>
    <div id="resume-main-section">
      <h2 className="resume-main-section-header">Work Experience</h2>
      <h3 class="top-sep">ZeroFOX &middot; Baltimore, MD</h3>
      <h3>Software Engineer &middot; February 2020 - March 2023</h3>
      <ul>
        <li>Act as Technical Lead of a small team to drive innovation, quality, and scalability to several distributed services. This includes:</li>
        <ul>
          <li>Digital Risk Data Collection Pipelines</li>
          <ul>
            <li>Systems responsible for scanning with customer-configured data across multiple sources. These pipelines consist of distributed microservices and different backend/frontend layers. Communication was implemented with a combination of AWS resources (SNS, SQS), HTTP requests, and GRPC calls.</li>
          </ul>
          <li>Collection Metrics and Analysis</li>
          <ul>
            <li>Utilized various metrics tools (e.g. Redis, InfluxDB, Prometheus, Grafana, BigQuery, and proprietary solutions) to monitor and alert on system health, as well as drive business decisions</li>
          </ul>
          <li>Other responsibilities include system deployments, external and internal validation, and research into technical approaches/prototypes</li>
        </ul>
        <li>Contribute to quarterly roadmap planning processes, as well as agile processes, that facilitate efficient delivery of value to the business and department</li>
        <li>Maintain code repositories for multiple projects that are in use throughout different backend pipelines</li>
        <li>Mentor newer and lower-level hires in order to quickly onboard them onto teams</li>
      </ul>
      <h3 class="top-sep">Smartlogic &middot; Baltimore, MD</h3>
      <h3>Developer &middot; March 2018 - February 2020</h3>
      <ul>
        <li>Lead React-Native development and project management efforts for several mobile application contracts</li>
        <li>Contribute to open-source software that is relevant to projects and libraries we rely on</li>
        <li>Dive into native platform code (Objective-C, Java) to patch third-party libraries and create custom functionality not available in our current framework</li>
        <li>Manage application deployment including test builds, app signing, and production releases</li>
        <li>Estimate future work for clients as part of our sales pipeline</li>
      </ul>
      <h3 class="top-sep">UPS &middot; Timonium, MD</h3>
      <h3>Applications Developer &middot; February 2017 - March 2018</h3>
      <ul>
        <li>Use agile development methodologies to plan, develop, test, and deploy a mobile application that acts as the foundation for future UPS platforms</li>
        <li>Utilize Xamarin.Forms and Prism framework to lay down complex logic in a maintainable and clean fashion</li>
        <li>Show initiative while handling various tasks with minimal supervision (iOS project, Scanner-equipped Android Devices)</li>
      </ul>
    </div>
  </div>;
}
