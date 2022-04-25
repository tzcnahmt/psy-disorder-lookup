const disorders = [
    {
        title: "Intellectual Development Disorder",
        desc: `Sometimes called intellectual disability, this type of developmental disorder originates prior to the age of 18 and is characterized by limitations in both intellectual functioning and adaptive behaviors.<br><br>

        Limitations to intellectual functioning are often identified through the use of IQ tests, with an IQ score under 70 often indicating the presence of a limitation. Adaptive behaviors are those that involve practical, everyday skills such as self-care, social interaction, and living skills.`,
    },
    {
        title: "Global Developmental Delay",
        desc: `This diagnosis is for developmental disabilities in children who are under the age of five. Such delays relate to cognition, social functioning, speech, language, and motor skills.<br><br>

        It is generally seen as a temporary diagnosis applying to kids who are still too young to take standardized IQ tests. Once children reach the age where they are able to take a standardized intelligence test, they may be diagnosed with an intellectual development disorder.`,
    },
    {
        title: "Communication Disorders",
        desc: `These disorders are those that impact the ability to use, understand, or detect language and speech. The DSM-5 identifies four different subtypes of communication disorders: language disorder, speech sound disorder, childhood-onset fluency disorder (stuttering), and social (pragmatic) communication disorder.`,
    },
    {
        title: "Autism Spectrum Disorder",
        desc: `Autism is characterized by persistent deficits in social interaction and communication in multiple life areas as well as restricted and repetitive patterns of behaviors.<br><br>

        The DSM specifies that symptoms of autism spectrum disorder must be present during the early developmental period and that these symptoms must cause significant impairment in important areas of life including social and occupational functioning.`,
    },
    {
        title: "Attention-Deficit Hyperactivity Disorder",
        desc: `ADHD is characterized by a persistent pattern of hyperactivity and impulsivity and/or inattention that interferes with functioning and presents itself in two or more settings such as at home, work, school, and social situations.<br><br>

        The DSM-5 specifies that several of the symptoms must have been present prior to the age of 12 and that these symptoms must have a negative impact on social, occupational, or academic functioning.`,
    },
    {
        title: "Mania",
        desc: `Mania is characterized by a distinct period of elevated, expansive, or irritable mood accompanied by increased activity and energy. Periods of mania are sometimes marked by feelings of distraction, irritability, and excessive confidence.`,
    },
    {
        title: "Depressive Episodes",
        desc: `These episodes are characterized by feelings of a depressed or sad mood along with a lack of interest in activities. It may also involve feelings of guilt, fatigue, and irritability. During a depressive period, people with bipolar disorder may lose interest in activities that they previously enjoyed, experience sleeping difficulties, and even have thoughts of suicide.<br><br>

        Both manic and depressive episodes can be frightening for both the person experiencing these symptoms as well as family, friends, and other loved ones who observe these behaviors and mood shifts. Fortunately, appropriate and effective treatments, which often include both medications and psychotherapy, can help people with bipolar disorder successfully manage their symptoms.`,
    },
    {
        title: "Generalized Anxiety Disorder",
        desc: `This disorder is marked by excessive worry about everyday events. While some stress and worry are a common part of life, GAD involves worry that is so excessive that it interferes with a person's well-being and functioning.`,
    },
    {
        title: "Social Anxiety Disorder",
        desc: `Social anxiety disorder is a fairly common psychological disorder that involves an irrational fear of being watched or judged. The anxiety caused by this disorder can have a major impact on an individual's life and make it difficult to function at school, work, and other social settings.`,
    },
    {
        title: "Specific Phobias",
        desc: `These phobias involve an extreme fear of a specific object or situation in the environment. Some examples of common specific phobias include the fear of spiders, fear of heights, or fear of snakes. <br><br>

        The four main types of specific phobias involve natural events (thunder, lightning, tornadoes), medical (medical procedures, dental procedures, medical equipment), animals (dogs, snakes, bugs), and situational (small spaces, leaving home, driving).`,
    },
    {
        title: "Panic Disorder",
        desc: `This psychiatric disorder is characterized by panic attacks that may seem to strike out of the blue and for no reason at all. Because of this, people with panic disorder often experience anxiety and preoccupation over the possibility of having another panic attack.<br><br>

        People may begin to avoid situations and settings where attacks have occurred in the past or where they might occur in the future. This can create significant impairments in many areas of everyday life and make it difficult to carry out everyday routines.`,
    },
    {
        title: "Separation Anxiety Disorder",
        desc: `This condition is a type of anxiety disorder involving an excessive amount of fear or anxiety related to being separated from attachment figures. People are often familiar with the idea of separation anxiety as it relates to young children's fear of being apart from their parents, but older children and adults can experience it as well.<br><br>

        The person experiencing these symptoms may avoid moving away from home, going to school, or getting married in order to remain in close proximity to the attachment figure.`,
    },
    {
        title: "Acute Stress Disorder",
        desc: `Acute stress disorder is characterized by the emergence of severe anxiety for up to one month after exposure to a traumatic event. Some examples of traumatic events include natural disasters, war, accidents, and witnessing a death.<br><br>

        As a result, the individual may experience dissociative symptoms such as a sense of altered reality, an inability to remember important aspects of the event, and vivid flashbacks as if the event were reoccurring. Other symptoms can include reduced emotional responsiveness, distressing memories of the trauma, and difficulty experiencing positive emotions.`,
    },
    {
        title: "Adjustment Disorders",
        desc: `Adjustment disorders can occur as a response to a sudden change such as divorce, job loss, end of a close relationship, a move, or some other loss or disappointment. This type of psychological disorder can affect both children and adults and is characterized by symptoms such as anxiety, irritability, depressed mood, worry, anger, hopelessness, and feelings of isolation.`,
    },
    {
        title: "Post-Traumatic Stress Disorder",
        desc: `PTSD can develop after an individual has experienced exposure to actual or threatened death, serious injury, or sexual violence. Symptoms of PTSD include episodes of reliving or re-experiencing the event, avoiding things that remind the individual about the event, feeling on edge, and having negative thoughts.<br><br>
        
        Nightmares, flashbacks, bursts of anger, difficulty concentrating, exaggerated startle response, and difficulty remembering aspects of the event are just a few possible symptoms that people with PTSD might experience.`,
    },
    {
        title: "Reactive Attachment Disorder",
        desc: `Reactive attachment disorder can result when children do not form healthy relationships and attachments with adult caregivers during the first few years of childhood. Symptoms of the disorder include being withdrawn from adult caregivers and social and emotional disturbances that result from patterns of insufficient care and neglect.`,
    },
    {
        title: "Dissociative Amnesia",
        desc: `This disorder involves a temporary loss of memory as a result of dissociation. In many cases, this memory loss, which may last for just a brief period or for many years, is a result of some type of psychological trauma.<br><br>

        Dissociative amnesia is much more than simple forgetfulness. Those who experience this disorder may remember some details about events but may have no recall of other details around a circumscribed period of time.`,
    },
    {
        title: "Dissociative Identity Disorder",
        desc: `Formerly known as multiple personality disorder, dissociative identity disorder involves the presence of two or more different identities or personalities in one person. Each of these personalities has its own way of perceiving and interacting with the environment. People with this disorder experience changes in behavior, memory, perception, emotional response, and consciousness.`,
    },
    {
        title: "Depersonalization/Derealization Disorder",
        desc: `Depersonalization/derealization disorder is characterized by experiencing a sense of being outside of one's own body (depersonalization) and being disconnected from reality (derealization). People who have this disorder often feel a sense of unreality and an involuntary disconnect from their own memories, feelings, and consciousness.`,
    },
    {
        title: "Somatic Symptom Disorder",
        desc: `Somatic symptom disorder involves a preoccupation with physical symptoms that make it difficult to function. This preoccupation with symptoms results in emotional distress and difficulty coping with daily life.<br><br>

        It is important to note that somatic symptoms do not indicate that individuals are faking their physical pain, fatigue, or other symptoms. In this situation, it is not so much the actual physical symptoms that are disrupting the individual's life as it is the extreme reaction and resulting behaviors.`,
    },
];
export { disorders };
