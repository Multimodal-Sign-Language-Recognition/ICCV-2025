// src/components/sections/Home.jsx
import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { motion } from 'framer-motion';
import { Award, Users, Mic, FileText, ChevronRight, ExternalLink } from 'lucide-react';

import Prof_Richard from "../../assets/images/RichardBowden.webp";
import Dr_Oscar from "../../assets/images/oscarkoller.jpg";
import Dr_Leon from "../../assets/images/leon-sigal.jpg";
import Dr_Abraham from "../../assets/images/glasser_abraham_headshot_cropped.jpeg";

const content = {
    overview: [
        "Sign language recognition has undergone rapid transformation in the past five years, fueled by advancements in deep learning and the integration of multimodal data sources. Both vision-based and sensor-based approaches have significantly improved accuracy and generalization, with emerging techniques combining RGB video, depth, skeletal keypoints, facial landmarks, and even radar data. These advances offer greater robustness and privacy in diverse real-world applications.",
        "Continuous Sign Language Recognition (CSLR) remains particularly challenging due to the need for precise temporal segmentation and the scarcity of annotated data. Innovative weakly-supervised, cross-lingual, and few-shot learning methods are addressing these gaps, enabling scalable solutions.",
        "Meanwhile, the field is expanding beyond recognition into translation and production, with generative models enabling avatar-based, fluent sign language synthesis. These developments are paving the way for seamless communication between Deaf and hearing communities. Foundational work in sign language translation further reveals the complexity of multi-channel linguistic articulation, emphasizing the urgent need for new datasets, benchmarks, and evaluation metrics tailored to sign languages.",
        "This workshop brings together researchers advancing Sign Language Recognition and Understanding, spanning isolated and continuous SLR, with focus on novel architectures, temporal modeling, and signer-independent systems. It highlights multimodal fusion—RGB, depth, skeletal data, facial expressions, and radar—for robust recognition, along with self-supervised and few-shot learning for data efficiency and domain adaptation. The program also covers sign language translation and production, including neural/statistical MT, avatar-based synthesis, and context-aware generation. Emphasis will be placed on diverse, ethically sourced datasets, cross-lingual benchmarks, privacy-preserving sensing, and real-world applications in healthcare, accessibility, and ethical AI practices."
    ],
    callForPapers: {
        intro: "We invite high-quality full-paper submissions on topics including, but not limited to:",
        categories: [
            { title: "Sign Language Recognition & Understanding", icon: <Award className="w-7 h-7 text-brand-accent" />, items: ["Isolated & Continuous SLR: novel architectures, temporal modeling, signer-independent recognition.", "Multimodal Fusion: RGB, depth, skeletal keypoints, facial expressions, radar for robust SLR.", "Self-Supervised & Few-Shot Learning: data-efficient sign recognition, domain adaptation, zero-shot learning."] },
            { title: "Sign Language Translation & Production", icon: <Mic className="w-7 h-7 text-brand-accent" />, items: ["Statistical & Neural MT for Sign Languages: end-to-end models for sign-to-text and text-to-sign translation.", "Generative Models for Sign Production: avatar-based synthesis, neural rendering, context-aware generation."] },
            { title: "Datasets, Benchmarks & Metrics", icon: <FileText className="w-7 h-7 text-brand-accent" />, items: ["New Corpora & Protocols: diverse, ethically sourced datasets; signer-independent and cross-lingual benchmarks.", "Privacy-Preserving Sensing: radar and non-visual modalities as alternatives to camera-based systems."] },
            { title: "SLR Applications & Ethics", icon: <Users className="w-7 h-7 text-brand-accent" />, items: ["Healthcare & Accessibility: deployment of SLR systems in clinical, telemedicine, and assistive contexts.", "Ethical Considerations: community-involved research, data governance, and algorithmic fairness."] }
        ],
        outro: "Submissions should follow the ICCV 2025 formatting guidelines and will undergo double-blind peer review. Accepted papers will be published in the ICCV Workshop Proceedings."
    },
    // Fixed speakers array - direct string paths instead of object literals
    speakers: [
        { name: "Prof. Richard Bowden", affiliation: "University of Surrey, UK", imgSrc: Prof_Richard },
        { name: "Dr. Oscar Koller", affiliation: "Microsoft Inc., USA", imgSrc: Dr_Oscar },
        { name: "Dr. Leonid Sigal", affiliation: "University of Rochester, USA", imgSrc: Dr_Leon },
        { name: "Dr. Abraham Glasser", affiliation: "Gallaudet University, USA", imgSrc: Dr_Abraham },

    ]
};

const speakersData = [
    { 
        name: "Prof. Richard Bowden",
        affiliation: "University of Surrey, UK", 
        imgSrc: Prof_Richard, 
        bio: "Richard Bowden is Professor of Computer Vision and Machine Learning at the University of Surrey where he leads the Cognitive Vision Group within CVSSP and is Associate Dean for postgraduate research within his faculty. His research centres on the use of computer vision to locate, track, understand and learn from humans.", 
        link: "https://scholar.google.com/citations?user=mvvgDvcAAAAJ",
        title: "Automatic translation of Sign Languages",
        abstract: "Having worked on technology for sign language recognition and translation for over two decades, this talk will summarise the current state of the art in the field and outline recent advances at the University of Surrey. It will discuss ongoing work funded by Google on automatic translation between spoken language and both British and American Sign Languages (BSL and ASL), and introduce the new SignGPT project—an £8.46M UKRI-funded programme aiming to revolutionise accessibility and communication for Deaf communities through generative AI models that translate seamlessly between spoken and signed languages. The talk will also introduce Signapse AI, a University of Surrey spin-out deploying early versions of these technologies in real-world contexts such as transport and broadcasting in both BSL and ASL. Together, these initiatives demonstrate how co-created AI—developed with and for the Deaf community—can unlock inclusive, multimodal communication for the future."
    },
    { 
        name: "Dr. Oscar Koller", 
        affiliation: "Microsoft Inc., USA", 
        imgSrc: Dr_Oscar, 
        bio: "Oscar Koller is an applied scientist in Microsoft's Speech and Language group. His research interests span many topics across speech recognition, sign language translation, sign language production, and computer vision in general.", 
        link: "https://scholar.google.com/citations?hl=it&user=vZrN9OgAAAAJ",
        title: "Delivering Sign Language AI at Scale: From Synthetic Data to Real-World Use",
        abstract: "In this keynote, we share our journey toward making sign language technologies a core part of Microsoft's accessibility efforts—particularly in enhancing communication experiences for Deaf and sign language users in Microsoft Teams. We highlight the transformative role of synthetic data in overcoming the scarcity of annotated sign language datasets, enabling scalable, inclusive, and diverse training resources. By leveraging time-synchronized multi-view capture, precise registration, and rendering pipelines, we generate richly labeled synthetic data across varied identities and environments. We advocate for community-driven multi-view data collection and emphasize that zero-shot evaluation—without fine-tuning—is the true benchmark for real-world deployment. This talk outlines our key learnings and invites collaboration to advance sign language technology for all."
    },
    { 
        name: "Dr. Leonid Sigal", 
        affiliation: "University of British Columbia, Canada", 
        imgSrc: Dr_Leon, 
        bio: "Prof. Leonid Sigal is a Professor at the University of British Columbia (UBC). He was appointed CIFAR AI Chair at the Vector Institute in 2019 and an NSERC Tier 2 Canada Research Chair in Computer Vision and Machine Learning in 2018. Prior to this, he was a Senior Research Scientist, and a group lead, at Disney Research. He completed his Ph.D at Brown University in 2008; received his B.Sc. degrees in Computer Science and Mathematics from Boston University in 1999, his M.A. from Boston University in 1999, and his M.S. from Brown University in 2003. Leonid’s research interests lie in the areas of computer vision, machine learning, and computer graphics; with the emphasis on approaches for visual and multi-modal representation learning, recognition, understanding and generative modeling. He has won a number of research awards, including Killam Accelerator Fellowship in 2021 and has published over 100 papers in venues such as CVPR, ICCV, ECCV, NeurIPS, ICLR, and Siggraph.", 
        link: "https://scholar.google.com/citations?user=P2mG6rcAAAAJ&hl=en",
        title: "The Curious Case of Foundational and VLM Models",
        abstract: "The capabilities and the use of foundational (FM) and vision-language (VLM) models in computer vision have exploded over the past few years. This has led to a broad paradigm shift in the field. In this talk I will focus on the recent work from my group that navigates this quickly evolving research landscape. Addressing challenges such as building foundational models with better generalization, increasing their context length, adopting them to ever evolving task landscape and routing information among them for more complex reasoning visual problems. I will also discuss some curious benefits and challenges of working with such models, including emergent (localization) capabilities and in-consistency in their responses."
    },
    { name: "Dr. Abraham Glasser", affiliation: "Gallaudet University, USA", imgSrc: Dr_Abraham,  bio: "Dr. Abraham Glasser is a faculty member in the Accessible Human-Centered Computing program at Gallaudet University, and there he is also co-director of the Rehabilitation Engineering Research Center on Technology for the Deaf and Hard of Hearing (DHH RERC). He and his students conduct Human Computer Interaction (HCI) research involving AI, immersive technologies, and accessible computing for Deaf and Hard of Hearing users. He is also a member of the Coalition for Sign Language Equity in Technology (CoSET) and has contributed to published resources supporting standards work, e.g. for AI-based interpreting. Overall, Dr. Glasser has published numerous works and delivered award-winning presentations at prestigious international venues, such as ACM, IEEE, and other events, including but not limited to AAATE, ASSETS, CHI, CSUN ATC, CUI, CVPR, DAC, EMNLP, GALA, ICED, LREC, TAPIA, TISLR, IEEE VR, VRST, W4A, XR ACCESS, and WFD events.",  link: "https://scholar.google.com/citations?hl=en&user=z1fXN4AAAAAJ" },

];

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const cardVariants = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay } }
});


const Home = () => {
    const handleCFPLinkClick = (e) => {
        e.preventDefault();
        const submissionSection = document.getElementById('submission');
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 80;
        if (submissionSection) {
            const elementPosition = submissionSection.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <>
            <SectionWrapper id="home-overview-internal" title="Welcome to MSLR 2025" subtitle="" bgColor="bg-white" contentMaxWidth="max-w-4xl">
                <div className="space-y-6 text-lg text-brand-neutral-700 leading-relaxed">
                    {content.overview.map((paragraph, index) => (
                        <motion.p key={index} variants={itemVariants}> {/* Framer Motion will inherit from parent SectionWrapper */}
                            {paragraph}
                        </motion.p>
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper id="home-cfp-internal" title="Call for Papers" subtitle="Contribute Your Research" bgColor="bg-brand-neutral-100">
                <motion.p className="max-w-3xl mx-auto text-center text-lg text-brand-neutral-700 mb-12 leading-relaxed" variants={itemVariants}>
                    {content.callForPapers.intro}
                </motion.p>
                <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                    {content.callForPapers.categories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            className="content-card transform hover:scale-[1.03]" // Using .content-card from index.css
                            variants={cardVariants(catIndex * 0.1)} // Stagger card appearance
                        >
                            <div className="flex items-center mb-4">
                                <span className="p-3 bg-brand-accent/10 rounded-full mr-4 shadow-sm">{category.icon}</span>
                                <h3 className="text-xl lg:text-2xl font-semibold text-brand-primary-dark">{category.title}</h3>
                            </div>
                            <ul className="space-y-3 text-brand-neutral-700 text-sm sm:text-base">
                                {category.items.map((item, itemIndex) => (
                                    <motion.li key={itemIndex} className="flex" variants={itemVariants}>
                                        <ChevronRight className="w-5 h-5 mr-2 mt-1 text-brand-accent flex-shrink-0" />
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
                <motion.p className="mt-12 text-center text-lg text-brand-neutral-700 max-w-3xl mx-auto leading-relaxed" variants={itemVariants}>
                    {content.callForPapers.outro} See the <button onClick={handleCFPLinkClick} className="btn-link">Submission Guidelines</button> for more details.
                </motion.p>
            </SectionWrapper>

            <SectionWrapper id="program-speakers-internal" title="Invited Speakers" subtitle="Learn from the Leaders" bgColor="bg-white">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                    {speakersData.map((speaker, index) => (
                        <motion.div
                            key={speaker.name}
                            className="content-card flex flex-col text-center transform hover:scale-[1.02]"
                            variants={cardVariants(index * 0.1)}
                        >
                            <img
                                src={speaker.imgSrc}
                                alt={speaker.name}
                                className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover mx-auto mb-5 border-4 border-brand-accent/40 group-hover:border-brand-accent transition-colors duration-300 shadow-md"
                            />
                            <h3 className="text-xl lg:text-2xl font-semibold text-brand-primary-dark mb-1">{speaker.name}</h3>
                            <p className="text-brand-neutral-600 text-sm mb-3">{speaker.affiliation}</p>
                            <p className="text-sm text-brand-neutral-700 leading-relaxed flex-grow mb-4 px-2">{speaker.bio}</p>
                            {speaker.title && (
                                <h4 className="text-lg font-semibold text-brand-primary-dark mt-2 px-2">
                                    {speaker.title}
                                </h4>
                            )}
                            {speaker.abstract && (
                                <p className="text-sm text-brand-neutral-700 leading-relaxed mb-4 px-2">
                                    {speaker.abstract}
                                </p>
                            )}
                            {speaker.link && (
                                <a
                                    href={speaker.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-link text-sm inline-flex items-center justify-center mt-auto"
                                >
                                    View Profile <ExternalLink size={14} className="ml-1.5" />
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

        </>
    );
};

export default Home;