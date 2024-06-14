import Image from "next/image";

const profileImage = {
  borderRadius: "100%",
  border: "2px solid white",
};

const profileImage2 = {
  borderRadius: "100%",
  border: "2px solid var(--moderate-violet)",
};

export default function Home() {
  return (
    <main className="pt-10">
      <section className="grid grid-cols-4 gap-5 max-w-5xl w-full max-lg:flex max-lg:flex-col max-lg:mx-5 max-lg:w-fit">
        {/* 1st daniel */}
        <div className="col-span-2 p-9 bg-moderate-violet text-white rounded-lg">
          <div className="flex gap-3">
            <div>
              <Image
                style={profileImage}
                src="/images/image-daniel.jpg"
                alt="daniel"
                width={40}
                height={40}
              />
            </div>
            <div>
              <p className="font-bold">Daniel Clifford</p>
              <span className="opacity-50">Verified Graduate</span>
            </div>
          </div>
          <p className="my-4 font-bold text-2xl">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny’s worth.
          </p>
          <p className="opacity-70">
            “ I was an EMT for many years before I joined the bootcamp. I’ve
            been looking to make a transition and have heard some people who had
            an amazing experience here. I signed up for the free intro course
            and found it incredibly fun! I enrolled shortly thereafter. The next
            12 weeks was the best - and most grueling - time of my life. Since
            completing the course, I’ve successfully switched careers, working
            as a Software Engineer at a VR startup. ”
          </p>
        </div>

        {/* 2nd jonathan */}
        <div className="p-9 bg-dark-grey-blue text-white rounded-lg">
          <div className="flex gap-3">
            <div>
              <Image
                style={profileImage}
                src="/images/image-jonathan.jpg"
                alt="jonathan"
                width={40}
                height={40}
              />
            </div>
            <div>
              <p className="font-bold">Jonathan Walters</p>
              <span className="opacity-50">Verified Graduate</span>
            </div>
          </div>
          <p className="my-4 font-bold text-2xl">
            The team was very supportive and kept me motivated
          </p>
          <p className="opacity-70">
            “ I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I’ve made in myself. ”
          </p>
        </div>

        {/* 3rd kira */}
        <div className="row-span-2 p-9 bg-white rounded-lg text-dark-grey-blue">
          <div className="flex gap-3">
            <div>
              <Image
                style={profileImage}
                src="/images/image-kira.jpg"
                alt="kira"
                width={40}
                height={40}
              />
            </div>
            <div>
              <p className="font-bold">Kira Whittle</p>
              <span className="opacity-50">Verified Graduate</span>
            </div>
          </div>
          <p className="my-4 font-bold text-2xl">
            Such a life-changing experience. Highly recommended!
          </p>
          <p className="opacity-70">
            “ Before joining the bootcamp, I’ve never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I’ve often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend! ”
          </p>
        </div>

        {/* 4th jeanette */}
        <div className="p-9 bg-white rounded-lg text-dark-grey-blue">
          <div className="flex gap-3">
            <div>
              <Image
                style={profileImage}
                src="/images/image-jeanette.jpg"
                alt="jeanette"
                width={40}
                height={40}
              />
            </div>
            <div>
              <p className="font-bold">Jeanette Harmon</p>
              <span className="opacity-50">Verified Graduate</span>
            </div>
          </div>
          <p className="my-4 font-bold text-2xl">
            An overall wonderful and rewarding experience
          </p>
          <p className="opacity-70">
            “ Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love. ”
          </p>
        </div>

        {/* 5th patrick */}
        <div className="col-span-2 p-9 bg-dark-black-blue text-white rounded-lg">
          <div className="flex gap-3">
            <div>
              <Image
                style={profileImage2}
                src="/images/image-patrick.jpg"
                alt="patrick"
                width={40}
                height={40}
              />
            </div>
            <div>
              <p className="font-bold">Patrick Abrams</p>
              <span className="opacity-50">Verified Graduate</span>
            </div>
          </div>
          <p className="my-4 font-bold text-2xl">
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </p>
          <p className="opacity-70">
            “ The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people. ”
          </p>
        </div>
      </section>
      <footer className="text-center text-xs py-3">
        Challenge by{" "}
        <a
          className="underline"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>{" "}
        | Coded by{" "}
        <a
          className="underline"
          href="https://www.frontendmentor.io/profile/Vanillatte68"
        >
          Roselin Y
        </a>
      </footer>
    </main>
  );
}
