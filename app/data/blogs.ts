/**
 * All blog posts extracted from the original The Feel Good Centre website.
 * Preserves 100% of the original content, imagery, and structure.
 */

export type BlogSection = {
  heading?: string
  paragraphs?: string[]
  list?: string[]
  postList?: string[]
}

export type BlogContentBlock =
  | { type: 'intro'; text: string }
  | ({ type: 'section' } & BlogSection)
  | { type: 'quote'; quote: string }

export type BlogPost = {
  slug: string
  title: string
  date: string
  image: string
  excerpt: string
  readTime: string
  content: BlogContentBlock[]
}

export const blogPosts: BlogPost[] = [
  {
    "slug": "technology-vs-human",
    "title": "Technology vs. Human: Why Heartfelt Listening Still Matters in an AI Age",
    "date": "September 5, 2025",
    "image": "/images/blog/1.webp",
    "excerpt": "Chatbots can check in. But they can't feel with you. Here's why real human presence still matters \u2014 especially when you're overwhelmed.",
    "readTime": "4 min read",
    "content": [
      {
        "type": "intro",
        "text": "Chatbots can check in. But they can't feel with you. Here's why real human presence still matters \u2014 especially when you're overwhelmed."
      },
      {
        "type": "section",
        "heading": "Both can hear you. Only one truly listens",
        "paragraphs": [
          "Let's be honest. Most of us talk to our phones more than we talk to our friends. We ask chatbots for help sleeping. We type \"I'm feeling low\" into an app. We get responses that sound soothing\u2026 but somehow, still feel distant.",
          "AI is fast. Efficient. Always available.",
          "But when you're having one of those \"I just can't do this today\" days, you don't need efficiency. You need empathy.",
          "That's where human listening still makes all the difference."
        ]
      },
      {
        "type": "section",
        "heading": "AI Has Changed How We Cope",
        "paragraphs": [
          "In the last few years, AI has transformed the wellness space. Tools like Wysa, Replika, and Woebot are designed to support people with stress, anxiety, and decision fatigue. And honestly? They help.",
          "Here's why people use them:"
        ],
        "list": [
          "They're private and free of stigma",
          "They're always online (even at 2 a.m.)",
          "They offer quick relief when you don't want to open up to anyone else"
        ],
        "postList": [
          "For many people, they're a first step. A safe way to test the waters of self-care.",
          "But they're still tools. Not connection."
        ]
      },
      {
        "type": "section",
        "heading": "The Difference You Can Feel",
        "paragraphs": [
          "Imagine telling a chatbot, \"I'm feeling lost.\"",
          "It might respond: \"I'm sorry you're feeling this way. Let's try a grounding exercise.\"",
          "Now imagine telling a person the same thing. And hearing them say: \"I hear you. That sounds heavy. I'm here, take your time.\"",
          "There's a difference. And your nervous system knows it.",
          "AI doesn't notice the crack in your voice or the pause before your words. It can't sit in silence with you. It doesn't feel the weight behind \"I'm fine.\"",
          "You don't always need solutions. Sometimes, you just need someone to sit with your story, and not look away."
        ]
      },
      {
        "type": "section",
        "heading": "What Heartfelt Listening Actually Feels Like",
        "paragraphs": [
          "At The Feel Good Centre, we don't offer advice. We offer presence.",
          "Our sessions are simple: One human. One hour. One space where you can show up exactly as you are.",
          "No filters. No performance. No need to \"make sense\" of everything.",
          "You talk. We listen. Deeply, patiently, and without judgment.",
          "Because when someone truly listens, your body feels it. You soften. You exhale. You stop spiralling, and start feeling again."
        ]
      },
      {
        "type": "section",
        "heading": "The Science of Being Seen",
        "paragraphs": [
          "Research shows that:"
        ],
        "list": [
          "Real human connection calms the stress centres in your brain",
          "Feeling heard increases oxytocin (the \"trust\" hormone)",
          "Compassionate listening builds resilience and emotional clarity"
        ],
        "postList": [
          "Simply put: Presence regulates the nervous system. Algorithms can't."
        ]
      },
      {
        "type": "quote",
        "quote": "Your feelings aren't a prompt. Your pain isn't a glitch. And your story deserves more than a script."
      },
      {
        "type": "section",
        "heading": "This Isn't Against Tech. It's For Humans.",
        "paragraphs": [
          "We're not here to cancel chatbots or knock wellness apps. They're useful. We use them too.",
          "But when you're emotionally full and mentally tangled, when what you're carrying feels too real for scripted support, there's no replacement for a real person who genuinely wants to hold space for you.",
          "That's what we do. And that's why people keep coming back."
        ]
      },
      {
        "type": "section",
        "heading": "\ud83d\udc9b Final Thought: Some Things Can't Be Automated",
        "paragraphs": [
          "Technology can connect our devices. But only another human can connect with our hearts.",
          "If your mind feels full and you need a quiet, safe, judgment-free space to talk it through, we are here for you."
        ]
      }
    ]
  },
  {
    "slug": "career-pressure-mini-reset",
    "title": "Overwhelmed by Career Pressure? Try This Mini Emotional Reset",
    "date": "September 5, 2025",
    "image": "/images/blog/2.webp",
    "excerpt": "Short on time but heavy in your mind? This 30-minute check-in may be all you need to recalibrate and exhale.",
    "readTime": "3 min read",
    "content": [
      {
        "type": "intro",
        "text": "Short on time but heavy in your mind? This 30-minute check-in may be all you need."
      },
      {
        "type": "section",
        "heading": "High Performers Carry Silent Weight",
        "paragraphs": [
          "Emails. Deadlines. Decisions. Expectations.",
          "Even high performers feel the pressure building up \u2014 not always visible on the outside, but loud inside the mind. If you\u2019ve ever thought, \"I don\u2019t even have time to think,\" this is for you.",
          "It\u2019s easy to appear calm and composed while holding emotional clutter inside. From decision fatigue to internal pressure, even the most capable people need a place to unpack.",
          "A mini emotional reset offers space to step out of the performance mindset and just be \u2014 without judgment or expectation."
        ]
      },
      {
        "type": "section",
        "heading": "What's a Mini Emotional Reset?",
        "paragraphs": [
          "This is a focused 30-minute 1:1 check-in designed to give your mind a breather without demanding hours from your schedule.",
          "It is designed for:"
        ],
        "list": [
          "Quick emotional clarity between intense meetings or projects",
          "Recurring check-ins during mentally heavy weeks",
          "Focused support to untangle thoughts without needing to justify anything"
        ],
        "postList": [
          "It\u2019s not therapy. It\u2019s not small talk. It\u2019s focused, compassionate listening \u2014 just when you need it most."
        ]
      },
      {
        "type": "section",
        "heading": "Why It Works",
        "paragraphs": [
          "In just half an hour, you can:"
        ],
        "list": [
          "Clear out the mental noise that has been accumulating all week",
          "Feel emotionally lighter and mentally unburdened",
          "Gain sharper focus and perspective for the rest of your day",
          "Leave the call more grounded and self-connected"
        ],
        "postList": [
          "Think of it as a breath of fresh air for your inner world."
        ]
      },
      {
        "type": "section",
        "heading": "When to Book One",
        "paragraphs": [
          "This session is perfect if:"
        ],
        "list": [
          "You\u2019ve had a tough meeting, difficult conversation, or feel overwhelmed",
          "You\u2019re mentally spiraling and need to reset before making your next move",
          "You feel emotionally drained but short on time",
          "You simply need someone to listen without giving unsolicited advice"
        ]
      },
      {
        "type": "quote",
        "quote": "In a world that rewards non-stop hustle, we forget how powerful 30 minutes of stillness can be."
      },
      {
        "type": "section",
        "heading": "\ud83d\udc9b Conclusion: A Small Pause with Big Impact",
        "paragraphs": [
          "Just 30 minutes of being heard can help you return to your day feeling a little clearer, a little calmer, and a lot more like yourself.",
          "Ready to reset your mind in half an hour? We are here to hold space for you."
        ]
      }
    ]
  },
  {
    "slug": "emotional-check-ins-workplace-productivity",
    "title": "How Emotional Check-Ins at Work Boost Productivity",
    "date": "May 17, 2025",
    "image": "/images/blog/3.webp",
    "excerpt": "Why psychological safety and human listening drive sustainable performance far more than pressure ever could.",
    "readTime": "4 min read",
    "content": [
      {
        "type": "intro",
        "text": "Why psychological safety drives performance more than pressure ever could."
      },
      {
        "type": "section",
        "heading": "The Hidden Cost of Emotional Silence",
        "paragraphs": [
          "It\u2019s Monday morning. Your top performer shows up late \u2014 again. They look distracted, low on energy, and less engaged than usual. You wonder if they\u2019re burned out or just not caring.",
          "Most employees aren\u2019t underperforming because they\u2019re lazy \u2014 they\u2019re overwhelmed, unheard, or emotionally drained.",
          "When there\u2019s no safe space to express personal or work-related stress, employees often disengage quietly. This leads to:"
        ],
        "list": [
          "Absenteeism or presenteeism (being physically present but mentally exhausted)",
          "Low morale and simmering team tension",
          "Costly mistakes, hesitations, or miscommunication",
          "Burnout and quiet disconnection from company goals"
        ],
        "postList": [
          "When emotions go unspoken, performance suffers \u2014 and so does company culture."
        ]
      },
      {
        "type": "section",
        "heading": "Why Traditional Wellness Perks Don\u2019t Go Far Enough",
        "paragraphs": [
          "Mental health webinars and yoga Fridays are a start, but they often miss the mark. Why? Because they don\u2019t offer the one thing employees actually crave: the feeling of being genuinely heard.",
          "Emotional check-ins are simple, intentional conversations where people can:"
        ],
        "list": [
          "Speak freely, without judgment or career repercussions",
          "Reflect on what\u2019s affecting them with absolute confidentiality",
          "Feel seen as a human being beyond their job title"
        ],
        "postList": [
          "This isn\u2019t therapy. It\u2019s honest, human connection that unlocks clarity."
        ]
      },
      {
        "type": "section",
        "heading": "What the Research Says",
        "paragraphs": [
          "Workplace psychology shows that psychological safety is the foundation for high-performing teams. According to studies from Harvard and Deloitte:"
        ],
        "list": [
          "Teams with high psychological safety are 27% more productive",
          "Employees who feel heard are 4.6x more likely to feel empowered to do their best work"
        ],
        "postList": [
          "Listening isn\u2019t just kind \u2014 it\u2019s smart business strategy."
        ]
      },
      {
        "type": "quote",
        "quote": "Productivity doesn't come from squeezing harder. It comes from creating room to breathe and think."
      },
      {
        "type": "section",
        "heading": "How Corporate Listening Plans Work",
        "paragraphs": [
          "The Feel Good Centre offers dedicated emotional check-in plans for modern teams:"
        ],
        "list": [
          "Private 1:1 sessions (virtual, flexible scheduling across time zones)",
          "Weekly, monthly, or quarterly check-in rhythms",
          "Completely confidential \u2014 no diagnosis, no HR reports, just space to talk",
          "Employees return to their desks with calm focus and renewed resilience"
        ]
      },
      {
        "type": "section",
        "heading": "Conclusion: Productivity Begins with Presence",
        "paragraphs": [
          "You don\u2019t have to wait for burnout or resignations to care. Regular emotional check-ins help people feel grounded, connected, and motivated.",
          "If you\u2019re ready to build a workplace culture that puts people before pressure \u2014 we\u2019re here to support that."
        ]
      }
    ]
  },
  {
    "slug": "workplace-gaslighting-reclaiming-voice",
    "title": "When Workplace Gaslighting Leaves You Questioning Yourself",
    "date": "May 17, 2025",
    "image": "/images/blog/4.webp",
    "excerpt": "Understanding subtle manipulation at work \u2014 and how reclaiming your voice starts with being heard in a safe space.",
    "readTime": "4 min read",
    "content": [
      {
        "type": "intro",
        "text": "Understanding subtle manipulation at work \u2014 and how reclaiming your voice starts with being heard."
      },
      {
        "type": "section",
        "heading": "What Is Workplace Gaslighting?",
        "paragraphs": [
          "You\u2019re in a meeting. Someone subtly undermines your idea, and later denies it ever happened. You start to doubt your memory, your instincts, your worth.",
          "This isn\u2019t overthinking \u2014 it could be workplace gaslighting.",
          "In today\u2019s high-pressure, performance-driven environments, emotional manipulation often hides behind professionalism. Workplace gaslighting happens when someone \u2014 often a manager or peer \u2014 manipulates your perception of reality to make you question your credibility. It\u2019s subtle, persistent, and psychologically exhausting.",
          "Common signs include:"
        ],
        "list": [
          "Constant minimization or rewriting of your achievements",
          "Being blamed for problems or delays outside your control",
          "Having legitimate concerns dismissed as \"too sensitive\" or \"too emotional\"",
          "Over-apologizing and second-guessing everything you say or write"
        ],
        "postList": [
          "It\u2019s not feedback \u2014 it\u2019s control, masked as communication."
        ]
      },
      {
        "type": "section",
        "heading": "How It Impacts Your Mental Health",
        "paragraphs": [
          "Being gaslit at work can lead to:"
        ],
        "list": [
          "Chronic anxiety, sleeplessness, and relentless overthinking",
          "Gradual loss of self-confidence and professional clarity",
          "Severe emotional burnout and fatigue",
          "Mistrust of your own instincts and abilities",
          "Silence, isolation, or the constant fear of speaking up"
        ],
        "postList": [
          "You start to shrink \u2014 not because you lack talent, but because the environment has trained you to doubt yourself."
        ]
      },
      {
        "type": "section",
        "heading": "Why It\u2019s Hard to See Clearly",
        "paragraphs": [
          "Gaslighting is subtle. It\u2019s often framed as professionalism, \"constructive criticism,\" or \"pushing you to grow.\" That\u2019s why many high performers struggle to name it \u2014 and instead internalize the problem as a personal failing.",
          "When everyone around you acts like everything is normal, you begin to think you are the problem."
        ]
      },
      {
        "type": "quote",
        "quote": "Gaslighting thrives in silence. Healing begins the moment you say the truth out loud in a safe space."
      },
      {
        "type": "section",
        "heading": "How Listening Sessions Help You Reclaim Your Ground",
        "paragraphs": [
          "Judgment-free listening sessions offer a safe space to unpack your experience without labels, advice, or corporate politics. In a session, you can:"
        ],
        "list": [
          "Speak without fear of being invalidated or minimized",
          "Untangle what is real from what has been twisted",
          "Reconnect with your instincts, self-trust, and natural voice",
          "Process what happened emotionally without having to \"put on a brave face\""
        ],
        "postList": [
          "These sessions won\u2019t fix a toxic workplace, but they will help you return to yourself."
        ]
      },
      {
        "type": "section",
        "heading": "\ud83d\udc9b Conclusion: You\u2019re Not Overreacting",
        "paragraphs": [
          "If your workplace is making you feel small, confused, or depleted \u2014 trust that signal. You\u2019re not too sensitive. You\u2019re human. And you deserve to feel safe in your own mind again.",
          "The Feel Good Centre is here to listen \u2014 no labels, no corporate pressure. Just space to be real, and begin again."
        ]
      }
    ]
  },
  {
    "slug": "why-talking-healing-than-therapy",
    "title": "Why Talking May Be More Healing Than Therapy for Some",
    "date": "May 17, 2025",
    "image": "/images/blog/5.webp",
    "excerpt": "Understanding the quiet power of being truly heard \u2014 without judgment, diagnosis, or pressure.",
    "readTime": "4 min read",
    "content": [
      {
        "type": "intro",
        "text": "Understanding the quiet power of being truly heard \u2014 without judgment, diagnosis, or pressure."
      },
      {
        "type": "section",
        "heading": "Not Every Heavy Heart Needs a Diagnosis",
        "paragraphs": [
          "Not everyone who feels emotionally stuck needs a clinical diagnosis or treatment plan. Sometimes, the simple act of talking to someone who truly listens \u2014 without judging, labeling, or trying to \"fix\" you \u2014 can bring more comfort and relief than traditional therapy.",
          "While clinical therapy is transformative and essential for mental health conditions, there is a growing, everyday need for something gentler: pure, compassionate listening.",
          "Here is why judgment-free, human-to-human conversations offer such a powerful form of emotional healing."
        ]
      },
      {
        "type": "section",
        "heading": "1. Therapy Isn\u2019t Always Accessible",
        "paragraphs": [
          "Therapy is immensely valuable \u2014 but it is not always immediately accessible. Long waitlists, high hourly fees, cultural stigma, or emotional hesitation can make it feel out of reach.",
          "Judgment-free listening sessions offer a warm, accessible alternative \u2014 especially for those not ready or in need of formal psychiatric therapy."
        ]
      },
      {
        "type": "section",
        "heading": "2. Sometimes, We Just Want to Be Heard",
        "paragraphs": [
          "In a world full of unsolicited advice, opinions, and quick fixes, being listened to without interruption is healing in itself.",
          "These sessions do not aim to analyse or \"fix\" you \u2014 they exist simply to hold space for you, exactly as you are, in this moment."
        ]
      },
      {
        "type": "section",
        "heading": "3. No Labels, Just Space",
        "paragraphs": [
          "Therapy often includes structured psychological evaluations, diagnostic criteria, and clinical goals. But not everyone needs or wants that.",
          "Many people simply want room to think out loud, release pent-up tension, and feel witnessed \u2014 without being categorized or assessed."
        ]
      },
      {
        "type": "quote",
        "quote": "Sometimes healing doesn't start with a solution or a diagnosis. It starts with having someone sit with your story without looking away."
      },
      {
        "type": "section",
        "heading": "4. Emotional Hygiene is Everyday Wellness",
        "paragraphs": [
          "You don\u2019t have to wait until you are in crisis to speak. Just like brushing your teeth or going for a walk, regular emotional check-ins help you process daily stress, clear mental clutter, and stay grounded."
        ]
      },
      {
        "type": "section",
        "heading": "5. It\u2019s Not a Replacement \u2014 It\u2019s a Complement",
        "paragraphs": [
          "Compassionate listening is not a replacement for clinical psychiatric therapy when needed \u2014 but it is a beautiful bridge to self-awareness, and a deeply supportive sanctuary on its own.",
          "It is about creating an emotionally safe culture, one honest conversation at a time."
        ]
      },
      {
        "type": "section",
        "heading": "\ud83d\udc9b Conclusion: Room to Exhale",
        "paragraphs": [
          "If therapy feels like too much, too formal, or too clinical for what you are experiencing, talking to someone in a safe, neutral space might be exactly what you need.",
          "The Feel Good Centre is here to hold that space. No labels. No pressure. Just genuine human presence."
        ]
      }
    ]
  }
]

export function findBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}

export function getRelatedBlogs(currentSlug: string, count = 3): BlogPost[] {
  return blogPosts.filter(p => p.slug !== currentSlug).slice(0, count)
}
