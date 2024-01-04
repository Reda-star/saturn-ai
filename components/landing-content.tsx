"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Reda Belouch ",
    avatar: "R",
    title: "Web developer & Devops Engineer 🧑‍💻",
    description: "My passion lies on development and devops, I love to create new things and learn new technologies.",
  },
  {
    name: "Barry Sanousa",
    avatar: "B",
    title: "Software Engineer ​🧑‍💻​",
    description: "Being a software engineer is not just a job, it's a lifestyle.",
  },
  {
    name: "Darwine Viviene",
    avatar: "D",
    title: "Designer ​🎨​",
    description: "I love designing the ui and ux of the applications, it's my passion.",
  },
  {
    name: "Ousseynou Dione",
    avatar: "O",
    title: "Quality Assurance Engineer ​​🧪​",
    description: "The quality of the product is the most important thing, I love to test and make sure everything is working as expected.",
  },{
    name: "Luc Hervine",
    avatar: "L",
    title: "Webmaster and Software Engineer ​​💻​⭐​",
    description: "The best way to predict the future is to create it.",
  },{
    name: "Eddie Mermoz",
    avatar: "E",
    title: "Software Engineer ​​💻​💯​",
    description: "Continous improvement is better than delayed perfection.",
  }
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Team Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}