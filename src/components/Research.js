import React from "react";

function Research() {
  return (
    <div className="research-section">
      <h2>Research</h2>
      <p>
        My research spans <strong>multimodal large language models</strong> and
        <strong> federated learning optimization</strong>, with a focus on
        robustness, safety, and performance on challenging data distributions.
      </p>

      <div className="research-entry">
        <h3>Ph.D. Research — Arizona State University (2025–Present)</h3>
        <ul className="research-highlights">
          <li>
            Investigating <strong>multimodal LLMs and foundation models</strong>{" "}
            for vision–language reasoning and human-centered AI applications.
          </li>
          <li>
            Exploring <strong>formal verification of neural networks</strong> to
            guarantee robustness and safety in real-world deployments.
          </li>
          <li>
            Current focus: developing methods to test and improve{" "}
            <strong>reliability of decision-making in multimodal AI systems</strong>.
          </li>
        </ul>
      </div>

      <div className="research-entry">
        <h3>Undergraduate Thesis — BUET (2018–2024)</h3>
        <p>
          <em>
            “Hybrid Optimization Methods for Enhancing Client Quality Scores for
            Non-IID Datasets”
          </em>{" "}
          (Advisor: Dr. Muhammad Ali Nayeem)
        </p>
        <ul className="research-highlights">
          <li>
            Developed a <strong>hybrid optimization algorithm</strong> combining
            gradient descent and simulated annealing to improve federated
            learning with heterogeneous client data.
          </li>
          <li>
            Proposed a <strong>maximum likelihood client weighting</strong>{" "}
            method to dynamically shuffle contributions and enhance aggregation
            accuracy.
          </li>
          <li>
            Achieved <strong>71% global accuracy</strong> on CIFAR-10/100,
            outperforming FedAvg baselines (61–65%).
          </li>
          <li>
            Results summarized in{" "}
            <a
              href="https://drive.google.com/file/d/1XQWrXt-5JjRTEPkYbbJ4a5iIqCHRif4E/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Extended Abstract
            </a>
            .
          </li>
        </ul>
        <div className="research-links">
          <h4>Links</h4>
          <ul>
            <li>
              <a
                href="https://github.com/Sachin-deb/Federated-Learning-MOONLiHood"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>{" "}
              — Codebase for hybrid optimization methods.
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1XQWrXt-5JjRTEPkYbbJ4a5iIqCHRif4E/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Extended Abstract
              </a>{" "}
              — Detailed write-up of the thesis work.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Research;
