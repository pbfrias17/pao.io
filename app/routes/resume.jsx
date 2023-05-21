export default function ResumePage() {
  return (
    <main>
      {/* <p>Download my resume</p> */}
      <div class="flex md:m-16 md:px-[10rem]">
        <div class="flex flex-1 flex-col">
          <div class="bg-cobalt p-6 [&>p]:text-white">
            <p class="m-0 font-semibold text-3xl">Paolo Frias</p>
            <p class="mb-3">Software Engineer</p>
            <p class="mt-3">paolo.b.frias@gmail.com</p>
            <p>443-910-6145</p>
            <p>Hanover, Maryland</p>
          </div>
          <div class="bg-gray-200 flex-1 px-6 pb-12">
            <p class="mt-12 font-semibold text-xl">Education</p>
            <p class="font-semibold">University of Maryland, Baltimore County</p>
            <p class="bottom-sep">(B.S. in Computer Science)</p>
            <p class="font-semibold">Online Certificates: </p>
            <span><p class="italic">Complete React Native and Redux Course (Udemy)</p></span>
            <p class="mt-6 font-semibold text-xl">Skills</p>
            <p class="font-semibold">Programming Languages</p>
            <p>Python, Golang, Javascript, C#</p>
            <p class="font-semibold mt-6">Frameworks and Libraries</p>
            <p>pytest, Django, GRPC framework, React, React-Native, Xamarin</p>
            <p class="font-semibold mt-6">Tools</p>
            <p>Hashicorp Suite (Terraform, Nomad, Vault), Amazon Web Services,  Git</p>
          </div>
        </div>
        <div class="p-6 bg-whitesmoke">
          <p class="font-semibold text-xl mb-6">Work Experience</p>
          <p class="font-semibold">ZeroFOX &middot; Baltimore, MD</p>
          <p class="font-semibold">Software Engineer &middot; February 2020 - March 2023</p>
          <ul class="list-disc list-outside ml-10">
            <li>Act as Technical Lead of a small team to drive innovation, quality, and scalability to several distributed services. This includes:</li>
            <ul class="list-disc list-outside ml-10">
              <li>Digital Risk Data Collection Pipelines</li>
              <ul class="list-disc list-outside ml-10">
                <li>Systems responsible for scanning with customer-configured data across multiple sources. These pipelines consist of distributed microservices and different backend/frontend layers. Communication was implemented with a combination of AWS resources (SNS, SQS), HTTP requests, and GRPC calls.</li>
              </ul>
              <li>Collection Metrics and Analysis</li>
              <ul class="list-disc list-outside ml-10">
                <li>Utilized various metrics tools (e.g. Redis, InfluxDB, Prometheus, Grafana, BigQuery, and proprietary solutions) to monitor and alert on system health, as well as drive business decisions</li>
              </ul>
              <li>Other responsibilities include system deployments, external and internal validation, and research into technical approaches/prototypes</li>
            </ul>
            <li>Contribute to quarterly roadmap planning processes, as well as agile processes, that facilitate efficient delivery of value to the business and department</li>
            <li>Maintain code repositories for multiple projects that are in use throughout different backend pipelines</li>
            <li>Mentor newer and lower-level hires in order to quickly onboard them onto teams</li>
          </ul>
          <p class="font-semibold mt-6">Smartlogic &middot; Baltimore, MD</p>
          <p class="font-semibold">Developer &middot; March 2018 - February 2020</p>
          <ul class="list-disc list-outside ml-10">
            <li>Lead React-Native development and project management efforts for several mobile application contracts</li>
            <li>Contribute to open-source software that is relevant to projects and libraries we rely on</li>
            <li>Dive into native platform code (Objective-C, Java) to patch third-party libraries and create custom functionality not available in our current framework</li>
            <li>Manage application deployment including test builds, app signing, and production releases</li>
            <li>Estimate future work for clients as part of our sales pipeline</li>
          </ul>
          <p class="font-semibold mt-6">UPS &middot; Timonium, MD</p>
          <p class="font-semibold">Applications Developer &middot; February 2017 - March 2018</p>
          <ul class="list-disc list-outside ml-10">
            <li>Use agile development methodologies to plan, develop, test, and deploy a mobile application that acts as the foundation for future UPS platforms</li>
            <li>Utilize Xamarin.Forms and Prism framework to lay down complex logic in a maintainable and clean fashion</li>
            <li>Show initiative while handling various tasks with minimal supervision (iOS project, Scanner-equipped Android Devices)</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
