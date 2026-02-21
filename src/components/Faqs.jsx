import FaqsWrapper from '@/clientComponents/FaqsWrapper';
import React from 'react'
import css from "../CSS/HomePage/Faqs.module.css"
const Faqs = () => {

  const FaqsData = [
    {
      question: "What exactly is an explainer video?",
      answer: "An explainer video is a short, engaging piece of content that makes your product, service, or idea easy to understand in just a minute or two. It combines visuals, motion, and sound to turn complex information into a clear, memorable story. Most explainer videos run between 60–90 seconds and are designed to quickly capture attention and leave a lasting impression. You’ll often see them on homepages, landing pages, or in sales presentations because they simplify what words alone can’t."
    },
    {
      question: "Why are explainer videos so effective?",
      answer: "Explainer videos work because they turn information into an experience. People retain far more when they both see and hear something—video blends both, making your message stick. Instead of asking viewers to read long paragraphs, you’re showing them why your idea matters. Videos also perform better online: they get shared more often, keep people on your page longer, and dramatically improve conversion rates."
    },
    {
      question: "Are Explainer Videos Profitable?",
      answer: "Explainer videos work because they turn information into an experience. People retain far more when they both see and hear something—video blends both, making your message stick. Instead of asking viewers to read long paragraphs, you’re showing them why your idea matters. Videos also perform better online: they get shared more often, keep people on your page longer, and dramatically improve conversion rates."
    },
    {
      question: "What can I achieve using explainer videos?",
      answer: "Explainer videos can drive real results across your business. They help people quickly understand what you do, build trust, boost brand awareness, and turn curious visitors into customers. They can also reduce support questions, improve engagement on your website, and even strengthen your SEO. In short, they make your brand easier to remember, understand, and believe in."
    },
    {
      question: "How much does an explainer video cost?",
      answer: "The cost depends on your goals, style, and level of detail. A high-quality 60-second animated explainer typically ranges between $3,000 and $10,000. Projects that involve 3D animation, custom illustration, or complex storytelling can go higher. Most businesses find the sweet spot around $5,000 for a fully produced video with professional voiceover, sound design, and polished animation that reflects their brand."
    },
    {
      question: "How long should an explainer video be?",
      answer: "The best explainer videos usually run between 60 and 90 seconds—long enough to explain your message but short enough to hold attention. For social media, shorter clips (30–60 seconds) often work better, while website or presentation videos can stretch to about two minutes if the story needs more space. The key is to keep every second valuable."
    },
    {
      question: "How long does it take to make an explainer video?",
      answer: "A typical explainer video takes about 4–6 weeks from concept to delivery. That includes time for scripting, storyboarding, voiceover, animation, sound design, and revisions. More detailed or 3D-heavy projects can take longer, while simple ones can be done faster. If you’re on a tight deadline, some studios (including ours) can speed things up with a rush option."
    },
    {
      question: "What are the different types/styles of explainer videos?",
      answer: "There are several popular styles, each suited to different goals: 2D Character Animation for storytelling and emotion, Motion Graphics for tech and corporate messaging, Whiteboard Animation for simple educational content, and Screencast videos for software or app demos. For most businesses, 2D animation or motion graphics strike the right balance of impact and cost."
    },
    {
      question: "Should I use animation or live action for my explainer video?",
      answer: "It depends on your message. Animation is perfect for explaining abstract ideas or processes that are hard to film. It’s flexible, scalable, and easy to update later. Live action adds a human touch and works well for showcasing real people, products, or spaces. Many of the most effective explainer videos combine both approaches."
    },
    {
      question: "Can explainer videos help with SEO?",
      answer: "Absolutely. Videos keep people on your website longer, which signals to search engines that your content is valuable. When optimized with the right keywords, titles, and descriptions, explainer videos can help pages rank higher. Hosting videos on YouTube and embedding them on your site boosts visibility in both video and web search results."
    },
    {
      question: "What is the explainer video production process?",
      answer: "The process is collaborative from start to finish. It includes briefing and research, scriptwriting, storyboarding and styleframes, voiceover selection, illustration and animation, sound design, and final delivery. Clients are involved at every stage, with opportunities to review and refine the video so it perfectly represents their brand."
    }
  ];




  return (
    <div className={css.FaqsWrapperSec}>
      <div className={`${css.container} container`}>
        <h5 className={`${css.highlight} highlight`}>FAQ'S</h5>
        <h2>Frequently Asked Questions</h2>

        <div className={css.image_faqs_wrapper}>
          <div className={css.image_section}>
            <img loading='lazy' src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1771122725/faqs_fonxjz.webp" alt="" />
          </div>

          <FaqsWrapper FaqsData={FaqsData} />
        </div>



      </div>
    </div>
  )
}

export default Faqs

