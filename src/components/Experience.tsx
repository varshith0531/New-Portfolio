
import { Calendar, Users, Trophy, Code2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import logo from '@/assets/company-logo.webp';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'CodeDale',
      period: 'March 2025 - Augst 2025',
      description: 'Developed UI and API features across 8+ modules, ensuring smooth data flow and reliable performance for 5K+ users. Optimized load times, fixed bugs, and collaborated with the team using clean Git workflows.',
      achievements: [
        'Built and maintained UI components and connected them seamlessly with backend services.',
        'Integrated and managed REST APIs with efficient asynchronous data handling.',
        'Debugged critical issues and improved performance across multiple modules.',
        'Collaborated using Git workflows, ensuring smooth code reviews and deployments.'
      ],
      iconImage: logo,
      color: 'bg-blue-500/10 text-blue-600',
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Wanna see{' '}
            <br className="hidden sm:block" />
            my experience?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
           From building foundational development skills to contributing to collaborative projects, here’s my journey of growing into a capable and solution-focused developer.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Left side - Company info */}
                  <div className="bg-muted/20 p-8 lg:p-12">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${exp.color} mb-6`}>
                      <img 
                        src={exp.iconImage} 
                        alt={exp.company} 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
                    <p className="text-lg font-semibold text-primary mb-2">{exp.title}</p>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Right side - Details */}
                  <div className="lg:col-span-2 p-8 lg:p-12">
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg mb-4">Key Achievements:</h4>
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">Ready to collaborate?</h3>
              <p className="text-muted-foreground mb-6">
                Let's build something amazing together. I'm always open to discussing new opportunities and exciting projects.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
