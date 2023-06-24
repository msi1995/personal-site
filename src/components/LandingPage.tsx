import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { EntryPage } from "./EntryPage";
import { Spotlight } from "./Spotlight";
import selfimg from "../assets/headshot02.png";
import cueLogo from "../assets/cuelogo.jpg";
import beaverLogo from "../assets/beaverLogo.png";
import atriumLogo from "../assets/atrium.png";
import linkedinLogo from "../assets/linkedinLogo.png";
import pythonLogo from "../assets/pythonLogo.png";
import reactLogo from "../assets/reactLogo.png";
import crowdcontrolLogo from "../assets/crowdcontrolLogo.png";
import githubLogo from "../assets/githubLogo.png";
import resumeLogo from "../assets/resumeLogo.png";

export const LandingPage = () => {
  const [entryPageActive, setEntryPageActive] = useState<boolean>(true);
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);
  const [isDark, setIsDark] = useState(false);
  const exitAudio = new Audio("/exit.mp3");
  const blackoutAudio = new Audio("/entry.mp3");
  exitAudio.volume = 0.3;

  const preloadAudio = () => {
    blackoutAudio.load();
    exitAudio.load();
  };

  const doExitThings = async () => {
    await exitAudio.play();
    await new Promise((resolve) => setTimeout(resolve, 300));
    setAnimationComplete(false);
    setEntryPageActive(true);
  };

  const blackout = () => {
    if (!isDark) {
      blackoutAudio.play();
    }
    setIsDark(!isDark);
  };

  useEffect(() => {
    preloadAudio();
  }, []);


  useEffect(() => {
    if (!entryPageActive) {
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setAnimationComplete(false);
    }
  }, [entryPageActive]);

  return (
    <div className="App">
      {entryPageActive ? (
        <EntryPage setEntryPageActive={setEntryPageActive} />
      ) : (
        <>
          <div className="sc-bg" onClick={() => blackout()} />
          <Spotlight blackout={isDark} />
          <div className="top-bar">
            <span className="top-bar-text" onClick={() => doExitThings()}>
              EXIT
            </span>
          </div>
          {!animationComplete && <div className="fade-in-overlay"></div>}
          <div className="main-flex">
            <div className="intro-content">
              <h4 className="intro">
                <img alt="Me" className="headshot" src={selfimg}></img>
                Doug Lloyd
              </h4>
              <p className="intro-para">
                {isDark
                  ? `As you can tell, I really enjoy building unique and engaging frontend experiences.`
                  : `I'm a Full Stack Software Engineer specializing in React.js with
                TypeScript.`}
              </p>
              {isDark ? (
                <p className="intro-para">
                  When I started experimenting with this spotlight feature, I
                  wanted to figure out how I could really make the user feel
                  they were discovering something new.
                </p>
              ) : (
                <p className="intro-para">
                  I spent 2022-23 at{" "}
                  <a
                    className="links"
                    href="https://cuehealth.com/"
                    target="_blank"
                  >
                    Cue Health
                  </a>{" "}
                  working with the MERN stack to create groundbreaking
                  telehealth functionality, and am also comfortable with Python
                  and occasionally C++.
                </p>
              )}
              {isDark ? (
                <p className="intro-para">There aren't any other easter eggs around the site for now, but I may add some more in the future. Playing around with CSS and transitions is super fun for me, but for now I'm out of ideas. Click the <a
                className="links"
                href="https://en.wikipedia.org/wiki/Tom_Clancy%27s_Splinter_Cell"
                target="_blank"
              >Sam Fisher</a> picture again to turn the lights back on. Thanks for coming!</p>
              ) : (
                <p className="intro-para">
                  In my spare time, you'll probably find me in the gym
                  powerlifting with my{" "}
                  <a
                    className="links"
                    href="https://www.openpowerlifting.org/u/teagancouch"
                    target="_blank"
                  >
                    girlfriend
                  </a>
                  , grinding ranked on{" "}
                  <a
                    className="links"
                    href="https://playvalorant.com/en-us/"
                    target="_blank"
                  >
                    VALORANT
                  </a>
                  , or waiting for the next Splinter Cell game. I can only hope
                  to one day be as good at software development as I am at
                  these!
                </p>
              )}
              <p className="intro-para">
                Want to talk? Critique my CSS?{" "}
                <a className="links" href="mailto:lloyd.dg7@gmail.com">
                  Shoot me an email here.
                </a>
              </p>
              <p className="intro-para">
                I'm always open to opportunities to better myself.
              </p>
            </div>
            <div className="main-content">
              <section className="flex-wrap section work-section">
                Work
                <div className="flex-wrap ws-entry-container">
                  <div className="wps-entry">
                    <p className="entry-title">
                      <img className="cueLogo" src={cueLogo}></img>
                      <a
                        className="links3"
                        href="https://cuehealth.com/"
                        target="_blank"
                      >
                        Cue Health — ('22-'23)
                      </a>
                    </p>
                    <p className="entry-info">
                      Full Stack SWE working on core CHAPI (Cue Health API) US
                      team, ~60/40 split between frontend and backend work.
                    </p>
                  </div>
                  <div className="wps-entry">
                    <p className="entry-title">
                      <img className="iarLogo" src={beaverLogo}></img>
                      <a
                        className="links3"
                        href="https://iar.oregonstate.edu/"
                        target="_blank"
                      >
                        OSU IAR — ('21-'22)
                      </a>
                    </p>
                    <p className="entry-info">
                      Student developer working with big data, infrastructure
                      and infra automation, as well as Python scripts for data
                      processing.
                    </p>
                  </div>
                  <div className="wps-entry">
                    <p className="entry-title">
                      <img className="standardLogo" src={atriumLogo}></img>
                      Atrium — (2019)
                    </p>
                    <p className="entry-info">
                      SWE Intern working on bug fixes, frontend components, and
                      documentation.
                    </p>
                  </div>
                </div>
              </section>
              <section className="flex-wrap section project-section">
                Projects
                <div className="flex-wrap ws-entry-container">
                  <div className="wps-entry">
                    <p className="entry-title">
                      <img className="standardLogo" src={pythonLogo} />
                      Python + Selenium Bot
                    </p>
                    <p className="entry-info">
                      My first ever Python project way back in 2020. I wrote a
                      Selenium bot to navigate a complex reservation process to
                      ensure I always got a spot at my university gym during
                      limited access due to COVID.
                    </p>
                  </div>
                  <div className="wps-entry">
                    <p className="entry-title">
                      <img
                        className="crowd-control-logo"
                        src={crowdcontrolLogo}
                      />
                      CrowdControl (WIP)
                    </p>
                    <p className="entry-info">
                      I tried my hand at React Native with CrowdControl. Aimed
                      at improving live event/festival safety by connecting
                      event organizers and attendees via push
                      messages/notifications.{" "}
                    </p>
                  </div>
                  <div className="wps-entry">
                    <p className="entry-title">
                      <img className="react-logo" src={reactLogo} />
                      NBA Game Finder
                    </p>
                    <p className="entry-info">
                      React SPA that allows users to select and fetch info about
                      a team and their games played in a desired season. Made
                      with Express, Bootstrap, Material UI. Mostly done as UI
                      practice.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="footer-container">
            <div className="footer">
              <a
                href="https://www.linkedin.com/in/doug-lloyd-29b149186/"
                target="_blank"
                className="footer-text links2 linkedin"
              >
                <img className="clickableLogos" src={linkedinLogo} />
              </a>
              <Link
                to={"/resume"}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-text links2 resume"
              >
                <img className="clickableLogos resumeLogo" src={resumeLogo} />
              </Link>
              <a
                href="https://github.com/msi1995"
                target="_blank"
                className="footer-text links2 github"
              >
                <img className="clickableLogos githubLogo" src={githubLogo} />
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
