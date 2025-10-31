import type { QuizSelections, Recommendation } from "./useQuiz";

export function generateRecommendation(selections: QuizSelections): Recommendation {
  const { niche, audience, style, mood, duration } = selections;

  if (niche === 'Tech' && audience === 'Businesses' && style === 'Mixed Media' && mood === 'Bold') {
    return { title:'Mixed Media Explainer', subtitle:'Dynamic & Engaging', description:'Combine live-action and motion graphics for a vibrant, data-driven story that grabs attention and converts. Perfect for showcasing innovation and technical capabilities.', gradient:'linear-gradient(135deg, rgba(217,70,239,.3), rgba(139,92,246,.3), rgba(59,130,246,.3))' };
  }
  if (niche === 'Healthcare' && audience === 'Consumers' && style === 'Animation' && mood === 'Emotional') {
    return { title:'Animated Patient Story', subtitle:'Heartfelt & Memorable', description:'Touch hearts with beautifully crafted animation that brings patient journeys to life. Build trust and emotional connection with your audience.', gradient:'linear-gradient(135deg, rgba(236,72,153,.3), rgba(168,85,247,.3), rgba(99,102,241,.3))' };
  }
  if (niche === 'Education' && audience === 'Students' && (style === 'Motion Graphics' || style === 'Animation') && mood === 'Playful') {
    return { title:'Motion Graphics Tutorial', subtitle:'Fun & Educational', description:'Make learning irresistible with vibrant motion graphics and playful transitions. Engage students while delivering clear, memorable lessons.', gradient:'linear-gradient(135deg, rgba(251,146,60,.3), rgba(249,115,22,.3), rgba(245,158,11,.3))' };
  }
  if (niche === 'Real Estate' && audience === 'Consumers' && style === 'Live Action' && mood === 'Inspirational') {
    return { title:'Cinematic Property Tour', subtitle:'Aspirational & Immersive', description:'Showcase properties with stunning cinematography that inspires dreams and drives decisions. Make every space feel like home.', gradient:'linear-gradient(135deg, rgba(14,165,233,.3), rgba(6,182,212,.3), rgba(20,184,166,.3))' };
  }
  if (niche === 'Retail' && audience === 'Consumers' && style === 'Animation' && mood === 'Playful' && duration === 'Reels') {
    return { title:'Snackable Brand Story', subtitle:'Quick & Catchy', description:'Stop scrollers in their tracks with bold, playful animation designed for social feeds. Maximum impact in under a minute.', gradient:'linear-gradient(135deg, rgba(236,72,153,.3), rgba(252,165,165,.3), rgba(254,215,170,.3))' };
  }
  if (niche === 'Tech' && audience === 'Investors' && style === 'Minimal Explainer' && mood === 'Corporate') {
    return { title:'Data-Driven Pitch Deck', subtitle:'Professional & Persuasive', description:'Present your vision with clean, minimalist design that highlights key metrics and growth potential. Confidence-inspiring clarity.', gradient:'linear-gradient(135deg, rgba(99,102,241,.3), rgba(79,70,229,.3), rgba(67,56,202,.3))' };
  }
  if (niche === 'Healthcare' && audience === 'Businesses' && style === 'Motion Graphics' && mood === 'Corporate') {
    return { title:'Medical Technology Overview', subtitle:'Clear & Credible', description:'Simplify complex healthcare solutions with precise motion graphics. Build credibility while making innovation accessible.', gradient:'linear-gradient(135deg, rgba(59,130,246,.3), rgba(37,99,235,.3), rgba(29,78,216,.3))' };
  }
  if (niche === 'Education' && audience === 'Employees' && style === 'Live Action' && mood === 'Inspirational') {
    return { title:'Team Training Narrative', subtitle:'Engaging & Empowering', description:'Transform training into inspiration with real stories and authentic moments. Build culture while developing skills.', gradient:'linear-gradient(135deg, rgba(168,85,247,.3), rgba(147,51,234,.3), rgba(126,34,206,.3))' };
  }
  if (niche === 'Retail' && audience === 'Businesses' && style === 'Mixed Media' && mood === 'Bold' && duration === 'Demo') {
    return { title:'Product Demo Showcase', subtitle:'Comprehensive & Captivating', description:'Blend product shots, graphics, and testimonials into a compelling demo that converts prospects into partners.', gradient:'linear-gradient(135deg, rgba(217,70,239,.3), rgba(236,72,153,.3), rgba(244,63,94,.3))' };
  }
  if (audience === 'Consumers' && style === 'Animation' && mood === 'Bold' && duration === 'Reels') {
    return { title:'Viral Animation Reel', subtitle:'Bold & Shareable', description:'Create scroll-stopping animations optimized for social virality. Stand out in crowded feeds with fearless creativity.', gradient:'linear-gradient(135deg, rgba(251,113,133,.3), rgba(244,114,182,.3), rgba(232,121,249,.3))' };
  }

  if (style === 'Animation') {
    return { title:'Custom Animation Video', subtitle:'Creative & Memorable', description:'Bring your story to life with custom animation that captures attention and communicates with clarity. Perfect for making complex ideas simple and engaging.', gradient:'linear-gradient(135deg, rgba(168,85,247,.3), rgba(139,92,246,.3), rgba(124,58,237,.3))' };
  }
  if (style === 'Live Action') {
    return { title:'Professional Live Video', subtitle:'Authentic & Impactful', description:'Connect with your audience through authentic, professionally shot video that builds trust and tells your story with genuine human emotion.', gradient:'linear-gradient(135deg, rgba(59,130,246,.3), rgba(37,99,235,.3), rgba(29,78,216,.3))' };
  }
  if (style === 'Motion Graphics') {
    return { title:'Motion Graphics Video', subtitle:'Dynamic & Modern', description:'Elevate your message with sleek motion graphics that transform data and concepts into visually stunning, easy-to-understand stories.', gradient:'linear-gradient(135deg, rgba(14,165,233,.3), rgba(6,182,212,.3), rgba(8,145,178,.3))' };
  }
  if (style === 'Mixed Media') {
    return { title:'Mixed Media Production', subtitle:'Versatile & Engaging', description:'Get the best of all worlds by combining live-action footage, animation, and graphics for a rich, multi-layered storytelling experience.', gradient:'linear-gradient(135deg, rgba(217,70,239,.3), rgba(139,92,246,.3), rgba(59,130,246,.3))' };
  }

  return { title:'Custom Video Solution', subtitle:'Tailored for Your Brand', description:"We'll craft a unique video experience perfectly suited to your brand, audience, and goals. Let's create something extraordinary together.", gradient:'linear-gradient(135deg, rgba(99,102,241,.3), rgba(139,92,246,.3), rgba(168,85,247,.3))' };
}


