
import { User, GraduationCap, Award, Code, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const technicalSkills = [
    'Full Stack Development', 'API Management', 'Python', 
   'JavaScript', 'SQL', 'MySQL', 'MongoDB', 'React.js', 'Node.js', 
    'Express.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Git', 'GitHub', 'Linux', 'Next.Js', 'REST API'
  ];

  const softSkills = [
    'Public Speaking',
    'Critical Thinking',
    'Problem Solving',
    'Communication',
  ];

  const education = [
    {
      institution: 'RMK Engineering College',
      degree: 'B.Tech in Computer Science and Business Systems',
      year: '2024',
      grade: 'CGPA: 8.73',
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      institution: 'Sri Chaitanya Junior College',
      degree: 'Intermediate',
      year: '2020',
      grade: 'Percentage: 88.9%',
      icon: <Award className="w-6 h-6" />
    },
    {
      institution: 'Win Field High School',
      degree: 'High School',
      year: '2018',
      grade: 'CGPA:9.2',
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            I transform challenging problems into intuitive digital experiences by merging thoughtful UI design with strong backend architecture, creating applications that are fast, seamless, and genuinely useful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Personal Info */}
          <div className="space-y-6 lg:space-y-8">
            <Card className="p-4 sm:p-6">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold">Personal Info</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-base sm:text-lg leading-relaxed">
                    Drawing from my experience in building responsive UIs, robust APIs, and AI-powered features, I create seamless, user-centric applications that turn real-world requirements into clean, effective digital products.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed">
                    I work closely with teams to shape concepts into functional, user-focused applications—balancing creativity, strategy, and solid full-stack development.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Technical Skills */}
            <Card className="p-4 sm:p-6">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold">Technical Skills</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {technicalSkills.map((skill) => (
                    <div key={skill} className="bg-muted/50 rounded-lg px-3 py-2 text-center font-medium text-xs sm:text-sm hover:bg-primary/10 transition-colors">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Soft Skills and Education */}
          <div className="space-y-6 lg:space-y-8">
            {/* Soft Skills */}
            <Card className="p-4 sm:p-6">
              <CardContent className="p-0">
                <h3 className="text-xl sm:text-2xl font-semibold mb-6">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-3">
                  {softSkills.map((skill) => (
                    <div key={skill} className="bg-muted/50 rounded-lg px-4 py-3 text-center font-medium text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="p-4 sm:p-6">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold">Education</h3>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        {edu.icon}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-sm sm:text-base">{edu.institution}</h4>
                        <p className="text-muted-foreground text-sm">{edu.degree}</p>
                        <div className="flex flex-col sm:flex-row sm:space-x-4 text-xs sm:text-sm">
                          <span className="text-primary font-medium">{edu.year}</span>
                          <span className="text-muted-foreground">{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Currently Working On */}
            <Card className="p-4 sm:p-6">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold">Currently Working On</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Building Next.js + AI powered applications",
                    "Improving full-stack architecture skills",
                    "Practicing system design fundamentals"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <p className="text-muted-foreground text-sm sm:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
