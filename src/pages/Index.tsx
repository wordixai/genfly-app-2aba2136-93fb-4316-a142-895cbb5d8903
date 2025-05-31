import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowUpRight, BarChart3, ChevronDown, CreditCard, Key, Lock, Mail, Search, User } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-1 flex-col items-center min-h-[calc(100vh-80px)] md:min-h-screen mx-auto bg-background text-foreground mb-16 mt-0 max-w-full lg:mt-8">
      {/* Header */}
      <header className="w-full flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <span className="font-bold text-lg">OpenRouter</span>
          </a>
        </div>
        <div className="relative">
          <div className="flex items-center bg-muted rounded-md px-3 py-1">
            <Search className="h-4 w-4 text-muted-foreground mr-2" />
            <input
              type="text"
              placeholder="Search models"
              className="bg-transparent border-none focus:outline-none text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <a href="/models" className="text-sm text-muted-foreground hover:text-foreground">Models</a>
          <a href="/chat" className="text-sm text-muted-foreground hover:text-foreground">Chat</a>
          <a href="/rankings" className="text-sm text-muted-foreground hover:text-foreground">Rankings</a>
          <a href="/docs" className="text-sm text-muted-foreground hover:text-foreground">Docs</a>
          <Button variant="outline" size="sm">Sign in</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="flex flex-col items-center gap-24 px-6 md:gap-28 md:px-8 md:pt-8">
        <div className="flex w-full max-w-4xl flex-col justify-center py-8 md:py-0">
          <div className="mb-3 flex flex-col gap-2 md:-mb-48 md:gap-1">
            <h1 className="my-0 w-full py-0 text-5xl font-semibold">
              <span className="mb-1 hidden md:block">The Unified</span>
              <span className="hidden md:block">Interface For LLMs</span>
              <span className="flex flex-col gap-0.5 text-3xl md:hidden">
                <div>The Unified</div>
                <div>Interface For LLMs</div>
              </span>
            </h1>
            <p className="text-slate-11 text-md mb-4 md:mb-8 md:pt-2 md:text-xl">
              Better <a href="https://openrouter.ai/models?order=pricing-low-to-high" className="text-primary hover:underline">prices</a>, 
              better <a href="https://openrouter.ai/docs/features/uptime-optimization" className="text-primary hover:underline">uptime</a>, 
              no subscription.
            </p>
          </div>

          {/* Chat Input and Model Cards */}
          <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-16 min-w-full flex-shrink-0">
            {/* Chat Input */}
            <div className="group/card text-card-foreground rounded-xl transition-all duration-200 hover:border-slate-7 hover:text-slate-12 border hover:shadow-lg bg-background relative w-full p-2 shadow-md md:translate-y-5">
              <div className="absolute -right-10 top-1/2 hidden -translate-y-1/2 translate-x-1/3 md:flex">
                <svg className="h-80 w-12" viewBox="-5 0 50 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <title>Routing Curves</title>
                  <g stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 150C12 150 15 75 25 65" stroke="currentColor" className="origin-center transition-all duration-300 text-slate-6"></path>
                    <path d="M2 160C12 160 22 160 25 160" stroke="currentColor" className="origin-center transition-all duration-300 text-primary"></path>
                    <path d="M2 170C12 170 15 255 25 255" stroke="currentColor" className="origin-center transition-all duration-300 text-slate-6"></path>
                  </g>
                  <g className="text-slate-7">
                    <circle cx="35" cy="60" r="4" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7"></circle>
                    <circle cx="35" cy="160" r="6" fill="currentColor" className="origin-center transition-all duration-300 text-primary"></circle>
                    <circle cx="35" cy="260" r="4" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7"></circle>
                  </g>
                </svg>
              </div>
              <div className="flex w-full items-center justify-between gap-3 flex-row">
                <Input 
                  className="w-full appearance-none py-2 transition duration-150 ease-in-out placeholder:text-foreground/30 shadow-border focus:shadow-inner focus:outline-none text-muted-foreground bg-background focus:bg-background/80 h-10 flex-1 rounded-lg border-0 px-4"
                  placeholder="Start a message..."
                />
                <Button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 bg-primary text-primary-foreground shadow hover:bg-primary/90 py-4 group aspect-square h-10 px-3 transition-colors md:aspect-auto md:flex-shrink-0">
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </div>
            </div>

            {/* Model Cards */}
            <div className="w-full min-w-80 space-y-3 md:w-auto">
              {/* Mobile Routing Diagram */}
              <div className="block md:hidden">
                <svg width="100%" className="h-10" viewBox="0 0 320 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <title>Routing Curves</title>
                  <g stroke="currentColor" strokeWidth="1.5">
                    <path d="M155 2C160 15 60 5 60 18" className="origin-center transition-all duration-300 text-slate-6"></path>
                    <path d="M160 2C160 12 160 15 160 18" className="origin-center transition-all duration-300 text-primary"></path>
                    <path d="M165 2C160 15 260 5 260 18" className="origin-center transition-all duration-300 text-slate-6"></path>
                  </g>
                  <g className="text-slate-7">
                    <circle cy="24" cx="60" r="3" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7"></circle>
                    <circle cy="24" cx="160" r="4" fill="currentColor" className="origin-center transition-all duration-300 text-primary"></circle>
                    <circle cy="24" cx="260" r="3" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7"></circle>
                  </g>
                </svg>

                {/* Mobile Provider Buttons */}
                <div className="grid grid-cols-3 gap-4 pb-3">
                  <Button className="whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 text-muted-foreground hover:bg-accent hover:text-accent-foreground h-11 flex items-center justify-center rounded-lg p-4" type="button">
                    <div className="flex items-center justify-center flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 size-8 transition-transform group-hover:scale-110 group-hover:rotate-12">
                      <div className="overflow-hidden rounded-full">
                        <img width="256" height="256" alt="Favicon for google" src="https://openrouter.ai/images/icons/GoogleGemini.svg" className="h-full w-full object-cover" />
                      </div>
                    </div>
                  </Button>
                  <Button className="whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 text-muted-foreground hover:bg-accent hover:text-accent-foreground h-11 flex items-center justify-center rounded-lg p-4" type="button">
                    <div className="flex items-center justify-center flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 size-8 transition-transform group-hover:scale-110 group-hover:rotate-12">
                      <div className="overflow-hidden rounded-full dark:invert">
                        <img width="256" height="256" alt="Favicon for openai" src="https://openrouter.ai/images/icons/OpenAI.svg" className="h-full w-full object-cover" />
                      </div>
                    </div>
                  </Button>
                  <Button className="whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 text-muted-foreground hover:bg-accent hover:text-accent-foreground h-11 flex items-center justify-center rounded-lg p-4" type="button">
                    <div className="flex items-center justify-center flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 size-8 transition-transform group-hover:scale-110 group-hover:rotate-12">
                      <div className="overflow-hidden rounded-full">
                        <img width="256" height="256" alt="Favicon for anthropic" src="https://openrouter.ai/images/icons/Anthropic.svg" className="h-full w-full object-cover" />
                      </div>
                    </div>
                  </Button>
                </div>

                {/* Mobile Featured Model Card */}
                <ModelCard 
                  name="GPT-4.1"
                  provider="openai"
                  tokens="41.4B"
                  latency="820ms"
                  growth="-9.44%"
                  isHighlighted={true}
                  providerIcon="https://openrouter.ai/images/icons/OpenAI.svg"
                  isDarkInvert={true}
                />

                {/* Mobile Featured Models Header */}
                <div className="flex items-center justify-between px-2 pt-4">
                  <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
                  <a className="text-primary text-xs hover:underline" href="https://openrouter.ai/rankings?view=trending">
                    View Trending
                    <ArrowUpRight className="inline-block ml-px size-3" />
                  </a>
                </div>
              </div>

              {/* Desktop Featured Models */}
              <div className="hidden space-y-3 md:block">
                <div className="flex items-center justify-between">
                  <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
                  <Button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring underline hover:text-link/80 h-6 rounded-md px-1.5 shadow-xs text-primary gap-0 text-xs hover:underline">
                    View Trending
                    <ArrowUpRight className="inline-block ml-px size-3" />
                  </Button>
                </div>

                {/* Gemini Model Card */}
                <ModelCard 
                  name="Gemini 2.5 Pro Preview"
                  provider="google"
                  tokens="204.5B"
                  latency="2.2s"
                  growth="+27.2%"
                  isHighlighted={false}
                  providerIcon="https://openrouter.ai/images/icons/GoogleGemini.svg"
                />

                {/* GPT-4.1 Model Card */}
                <ModelCard 
                  name="GPT-4.1"
                  provider="openai"
                  tokens="41.4B"
                  latency="820ms"
                  growth="-9.44%"
                  isHighlighted={true}
                  providerIcon="https://openrouter.ai/images/icons/OpenAI.svg"
                  isDarkInvert={true}
                />

                {/* Claude Model Card */}
                <ModelCard 
                  name="Claude Sonnet 4"
                  provider="anthropic"
                  tokens="232.2B"
                  latency="1.9s"
                  growth="--"
                  isNew={true}
                  isHighlighted={false}
                  providerIcon="https://openrouter.ai/images/icons/Anthropic.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col gap-8 md:gap-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          <a href="https://openrouter.ai/rankings" className="group/card rounded-xl transition-all duration-200 bg-card hover:bg-card/80 text-foreground shadow-inner hover:scale-110 hover:shadow-slate-6">
            <div className="p-4 md:p-6">
              <div className="flex flex-col items-center gap-1 md:gap-2">
                <p className="text-3xl md:text-4xl font-bold text-foreground">7.9T</p>
                <p className="text-xs md:text-sm text-muted-foreground">Monthly Tokens</p>
              </div>
            </div>
          </a>
          <div className="group/card rounded-xl transition-all duration-200 bg-card hover:bg-card/80 text-foreground shadow-inner hover:scale-110 hover:shadow-slate-6">
            <div className="p-4 md:p-6">
              <div className="flex flex-col items-center gap-1 md:gap-2">
                <p className="text-3xl md:text-4xl font-bold text-foreground">2M</p>
                <p className="text-xs md:text-sm text-muted-foreground">Global Users</p>
              </div>
            </div>
          </div>
          <a href="https://openrouter.ai/models" className="group/card rounded-xl transition-all duration-200 bg-card hover:bg-card/80 text-foreground shadow-inner hover:scale-110 hover:shadow-slate-6">
            <div className="p-4 md:p-6">
              <div className="flex flex-col items-center gap-1 md:gap-2">
                <p className="text-3xl md:text-4xl font-bold text-foreground">50+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Active Providers</p>
              </div>
            </div>
          </a>
          <a href="https://openrouter.ai/models" className="group/card rounded-xl transition-all duration-200 bg-card hover:bg-card/80 text-foreground shadow-inner hover:scale-110 hover:shadow-slate-6">
            <div className="p-4 md:p-6">
              <div className="flex flex-col items-center gap-1 md:gap-2">
                <p className="text-3xl md:text-4xl font-bold text-primary">300+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Models</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Getting Started Steps */}
      <div className="space-y-8 md:space-y-12 max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Step 1: Signup */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">1</div>
              <h3 className="text-base md:text-lg font-semibold">Signup</h3>
            </div>
            <div className="min-h-10 md:min-h-12">
              <p className="text-sm text-muted-foreground">Create an account to get started. You can set up an org for your team later.</p>
            </div>
            <div className="w-full max-w-56 pt-4 md:px-2 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                <div className="h-4 w-6 flex flex-col justify-center">
                  <div className="h-1 bg-primary/20 rounded"></div>
                  <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
                </div>
                <div className="h-4 w-12 flex flex-col justify-center">
                  <div className="h-1 bg-primary/20 rounded"></div>
                  <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
                </div>
              </div>
              <div className="flex flex-row gap-2 max-w-56">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>Google</title>
                    <path d="M12 11V8l5 4-5 4v-3H8v-2h4Z" fill="#4285F4"></path>
                    <path d="M12 5c1 0 2 .2 3 .5 1 .4 1.8.9 2.5 1.5L20 4.7a11.3 11.3 0 0 0-15.2-.1L7 6.9c.8-.6 1.6-1.1 2.5-1.5 1-.3 2-.5 3-.5L12 5Z" fill="#EA4335"></path>
                    <path d="M5 12c0-1 .2-2 .5-3C6 8 6.4 7.2 7 6.5L4.7 4a11.3 11.3 0 0 0-.1 15.2L6.9 17a7.6 7.6 0 0 1-1.5-2.5c-.3-1-.5-2-.5-3l.1.5Z" fill="#FBBC05"></path>
                    <path d="M12 19c-1 0-2-.2-3-.5-1-.4-1.8-.9-2.5-1.5L4 19.3a11.3 11.3 0 0 0 15.2.1L17 17.1c-.8.6-1.6 1.1-2.5 1.5-1 .3-2 .5-3 .5l.5-.1Z" fill="#34A853"></path>
                    <path d="M19 12c0 1 0 2-.4 3s-.9 1.8-1.5 2.5l2.3 2.4a11.3 11.3 0 0 0 .1-15.2L17.2 7c.6.8 1.1 1.6 1.5 2.5.3 1 .5 2 .5 3L19 12Z" fill="#4285F4"></path>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>GitHub</title>
                    <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.581 9.521 21.278 9.521 21.017C9.521 20.782 9.512 20.082 9.508 19.272C6.726 19.859 6.139 17.967 6.139 17.967C5.685 16.812 5.029 16.51 5.029 16.51C4.121 15.889 5.098 15.901 5.098 15.901C6.101 15.971 6.629 16.926 6.629 16.926C7.521 18.455 8.97 18.013 9.539 17.762C9.631 17.129 9.889 16.689 10.175 16.419C7.954 16.146 5.62 15.319 5.62 11.534C5.62 10.42 6.01 9.513 6.649 8.809C6.546 8.559 6.203 7.58 6.747 6.189C6.747 6.189 7.586 5.925 9.497 7.234C10.3 7.014 11.15 6.904 12 6.9C12.85 6.904 13.7 7.014 14.503 7.234C16.414 5.925 17.253 6.189 17.253 6.189C17.797 7.58 17.454 8.559 17.351 8.809C17.99 9.513 18.38 10.42 18.38 11.534C18.38 15.329 16.046 16.143 13.825 16.416C14.171 16.75 14.509 17.429 14.509 18.458C14.509 19.92 14.499 20.692 14.499 21.017C14.499 21.278 14.681 21.581 15.181 21.489C19.155 20.166 22.02 16.418 22.02 12C22.02 6.477 17.523 2 12 2Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>MetaMask</title>
                    <path d="M19.2 3.54 13.1 8.1l1.3-2.93 4.8-1.62Z" fill="#E17726"></path>
                    <path d="m4.8 3.54 6.05 4.6-1.24-2.98L4.8 3.54ZM16.83 15.9l-1.78 3.08 3.8 1.18 1.07-4.22-3.1-.05Zm-12.74.04 1.07 4.22 3.8-1.18-1.79-3.09-3.08.05Zm4.63-5.39-1.13 1.78 3.75.19-.14-4.06-2.48 2.09Zm6.56 0L12.75 8.4l-.1 4.1 3.76-.18-1.13-1.78Z" fill="#E27625"></path>
                    <path d="m8.95 18.98 2.16-1.26-1.88-1.74-.28 3Zm3.95-1.26 2.15 1.26-.28-3-1.88 1.74Z" fill="#E27625"></path>
                    <path d="m15.05 18.98-2.16-1.26.19 1.69-.03.7 2-1.13Zm-6.1 0 2 1.13-.03-.7.19-1.7-2.16 1.27Z" fill="#D5BFB2"></path>
                    <path d="m11 14.95-1.81-.6 1.26-.7.55 1.3Zm2 0 .55-1.3 1.26.7-1.81.6Z" fill="#233447"></path>
                    <path d="m8.95 18.98.3-3.09-2.08.05 1.78 3.04Zm5.8-3.08.3 3.08 1.78-3.04-2.08-.05Zm1.65-3.57-3.74.19.34 2.43.55-1.3 1.26.7 1.6-2.02Zm-7.21 2.01 1.26-.7.55 1.31.34-2.43-3.75-.2 1.6 2.02Z" fill="#CC6228"></path>
                    <path d="m7.6 12.33 1.63 3.65-.04-1.64-1.6-2.01Zm7.21 2.01-.04 1.64 1.64-3.65-1.6 2.01Zm-3.47-1.82L11 14.95l.44 2.08.1-3.2-.2-1.31Zm1.32 0-.2 1.3.1 3.21.44-2.08-.34-2.43Z" fill="#E27525"></path>
                    <path d="m13 14.95-.44 2.08.33.69 1.88-1.74.04-1.64-1.81.61Zm-3.81-.61.04 1.64 1.88 1.74.33-.69-.44-2.08-1.81-.6Z" fill="#F5841F"></path>
                    <path d="m13.05 20.1.03-.7-.17-.13h-1.82l-.17.14.03.7-2-1.13.9.75 1.22.9h1.86l1.23-.9.89-.75-2 1.13Z" fill="#C0AC9D"></path>
                    <path d="m12.9 17.72-.34-.69h-1.12l-.33.69-.19 1.69.17-.14h1.82l.17.14-.19-1.7Z" fill="#161616"></path>
                    <path d="m19.6 9.1.56-3-.96-2.56-6.3 4.92 2.38 2.09 3.47 1.07.75-.89-.33-.23.56-.47-.4-.28.57-.38-.3-.28Zm-15.76-3 .57 3-.3.28.55.37-.4.28.57.47-.33.23.75.9 3.47-1.08 2.39-2.09L4.8 3.54 3.84 6.1Z" fill="#763E1A"></path>
                    <path d="m18.75 11.63-3.47-1.08 1.13 1.78-1.64 3.65 2.06-.04h3.1l-1.18-4.31ZM8.72 10.55l-3.47 1.07-1.16 4.32h3.08l2.06.04-1.64-3.65 1.13-1.78Zm3.94 1.97.23-4.06 1.5-3.3H9.61l1.5 3.3.23 4.06.1 1.3v3.21h1.12v-3.2l.1-1.31Z" fill="#F5841F"></path>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Buy credits */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">2</div>
              <h3 className="text-base md:text-lg font-semibold">Buy credits</h3>
            </div>
            <div className="min-h-10 md:min-h-12">
              <p className="text-sm text-muted-foreground">Credits can be used with any model or provider.</p>
            </div>
            <div className="w-full max-w-56 pt-4 md:px-2 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" />
                <div className="h-4 w-6 flex flex-col justify-center">
                  <div className="h-1 bg-primary/20 rounded"></div>
                  <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
                </div>
                <div className="h-4 w-6 flex flex-col justify-center">
                  <div className="h-1 bg-primary/20 rounded"></div>
                  <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
                </div>
                <div className="h-4 w-6 flex flex-col justify-center">
                  <div className="h-1 bg-primary/20 rounded"></div>
                  <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
                </div>
                <div className="h-4 w-6 flex flex-col justify-center">
                  <div className="h-1 bg-primary/20 rounded"></div>
                  <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-6 bg-primary/5 rounded flex items-center px-2">
                  <span className="text-xs text-muted-foreground">Apr 1</span>
                  <div className="flex-1 flex items-center gap-2 mx-2">
                    <div className="h-2 flex-1 bg-primary/10 rounded"></div>
                    <div className="h-2 flex-1 bg-primary/10 rounded"></div>
                  </div>
                  <span className="text-sm font-medium">$99</span>
                </div>
                <div className="h-6 bg-primary/5 rounded flex items-center px-2">
                  <span className="text-xs text-muted-foreground">Mar 30</span>
                  <div className="flex-1 flex items-center gap-2 mx-2">
                    <div className="h-2 flex-1 bg-primary/10 rounded"></div>
                    <div className="h-2 flex-1 bg-primary/10 rounded"></div>
                  </div>
                  <span className="text-sm font-medium">$10</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Get your API key */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">3</div>
              <h3 className="text-base md:text-lg font-semibold">Get your API key</h3>
            </div>
            <div className="min-h-10 md:min-h-12">
              <p className="text-sm text-muted-foreground">
                Create an API key and start making requests.{" "}
                <a href="https://openrouter.ai/docs/quickstart" className="text-primary hover:underline">Fully OpenAI compatible</a>.
              </p>
            </div>
            <div className="w-full max-w-56 pt-4 md:px-2 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Key className="w-5 h-5 text-primary" />
                <div className="h-6 flex-1 bg-primary/5 rounded flex items-center px-2">
                  <span className="text-xs text-muted-foreground tracking-wide">OPENROUTER_API_KEY</span>
                </div>
              </div>
              <div className="h-6 bg-primary/5 rounded flex items-center px-2">
                <span className="text-xs tracking-wider">••••••••••••••••</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="space-y-4 md:space-y-8">
        <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
          {/* Card 1: One API for Any Model */}
          <FeatureCard
            title="One API for Any Model"
            description="Access all major models through a single, unified interface. OpenAI SDK works out of the box."
            link="https://openrouter.ai/models"
            linkText="Browse all"
            imageContent={
              <div className="absolute inset-0">
                <div className="absolute inset-0 z-20 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-1 via-transparent to-slate-1 opacity-30"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-1 via-transparent to-slate-1 opacity-30"></div>
                </div>
                <div className="absolute inset-[1rem] grid grid-cols-5 gap-x-3 gap-y-1 scale-105 z-10">
                  {/* This would contain the provider icons grid */}
                  {/* For brevity, I'm not including all the icons here */}
                  <ProviderIcon src="https://openrouter.ai/images/icons/GoogleGemini.svg" alt="Google" animationDelay="0ms" />
                  <ProviderIcon src="https://openrouter.ai/images/icons/OpenAI.svg" alt="OpenAI" animationDelay="150ms" darkInvert={true} />
                  <ProviderIcon src="https://openrouter.ai/images/icons/Anthropic.svg" alt="Anthropic" animationDelay="300ms" />
                </div>
              </div>
            }
          />

          {/* Card 2: Higher Availability */}
          <FeatureCard
            title="Higher Availability"
            description="Reliable AI models via our distributed infrastructure. Fall back to other providers when one goes down."
            link="https://openrouter.ai/docs/features/uptime-optimization"
            linkText="Learn more"
            imageContent={
              <div className="h-full flex items-center justify-center">
                <div className="relative w-full max-w-52 flex flex-col items-center gap-y-2">
                  <div className="bg-muted px-3 py-1 rounded-lg text-xs text-foreground">anthropic/claude-3.7-sonnet</div>
                  <svg width="100%" height="70" viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-muted-foreground/60" aria-labelledby="routing-diagram-title">
                    <title id="routing-diagram-title">Model routing visualization</title>
                    <path d="M95 0 C100 40, 20 20, 10 65" stroke="currentColor" strokeWidth="0.75"></path>
                    <path d="M100 0 C100 20, 100 20, 100 65" stroke="currentColor" strokeWidth="0.75"></path>
                    <path d="M105 0 C100 40, 180 20, 190 65" stroke="currentColor" strokeWidth="0.75"></path>
                  </svg>
                  <div className="flex justify-between w-full">
                    <ProviderIcon src="https://openrouter.ai/images/icons/GoogleGemini.svg" alt="Google" small />
                    <ProviderIcon src="https://openrouter.ai/images/icons/Anthropic.svg" alt="Anthropic" small />
                    <ProviderIcon src="https://openrouter.ai/images/icons/Bedrock.svg" alt="Amazon" small />
                  </div>
                </div>
              </div>
            }
          />

          {/* Card 3: Price and Performance */}
          <FeatureCard
            title="Price and Performance"
            description="Keep costs in check without sacrificing speed. OpenRouter runs at the edge, adding just ~25ms between your users and their inference."
            link="https://openrouter.ai/docs/features/provider-routing#provider-sorting"
            linkText="Learn more"
            imageContent={
              <div className="relative flex h-full items-center justify-center">
                <div className="absolute inset-0 z-10">
                  <div className="from-slate-1 to-slate-1 absolute inset-0 bg-gradient-to-t via-transparent opacity-20"></div>
                  <div className="from-slate-1 to-slate-1 absolute inset-0 bg-gradient-to-r via-transparent opacity-20"></div>
                </div>
                <img alt="Performance graph" className="h-full w-full object-contain" src="https://openrouter.ai/_next/image?url=%2Fperf-light.png&w=640&q=75" />
              </div>
            }
          />

          {/* Card 4: Custom Data Policies */}
          <FeatureCard
            title="Custom Data Policies"
            description="Protect your organization with fine grained data policies. Ensure prompts only go to the models and providers you trust."
            link="https://openrouter.ai/docs/features/privacy-and-logging"
            linkText="View docs"
            imageContent={
              <div className="h-full flex items-center justify-center">
                <div className="flex flex-col items-center w-full max-w-52">
                  <div className="flex justify-between items-end w-full px-[45px] -mb-2">
                    <Lock className="size-4 text-muted-foreground" />
                    <div className="w-7 h-7 rounded-full bg-green-3 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-green-9">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <Lock className="size-4 text-muted-foreground" />
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.3" stroke="currentColor" className="size-32 text-muted-foreground/60">
                    <title>Data policy visualization</title>
                    <path d="M12 2.7A12 12 0 0 1 3.6 6 12 12 0 0 0 3 9.7a12 12 0 0 0 9 11.7A12 12 0 0 0 20.4 6h-.1A12 12 0 0 1 12 2.7Z"></path>
                    <path strokeWidth=".4" d="M14.2 14.5a3.6 3.6 0 0 0 1.5-.2 1.2 1.2 0 0 0-1.9-1m.4 1.2v.3a4.8 4.8 0 0 1-2.4.6c-.9 0-1.7-.2-2.4-.6a2.4 2.4 0 0 1 0-.3m4.8 0a2.4 2.4 0 0 0-.4-1.3m0 0a2.4 2.4 0 0 0-2-1.1 2.4 2.4 0 0 0-2 1.1m0 0a1.2 1.2 0 0 0-1.9 1.1 3.6 3.6 0 0 0 1.5.2m.4-1.3a2.4 2.4 0 0 0-.4 1.3M13 9.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Zm2.4 1.2a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Zm-5.4 0a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Z"></path>
                  </svg>
                </div>
              </div>
            }
          />
        </div>
      </div>

      {/* Top Apps Section */}
      <div className="flex flex-col gap-5 max-w-4xl">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <BarChart3 className="size-5 text-slate-9" />
              <h3 className="text-md font-medium text-slate-11">Top Apps</h3>
            </div>
            <p className="text-xs font-medium text-slate-11 hidden md:block">
              Largest public apps <a href="https://openrouter.ai/docs/api-reference/overview#headers" className="text-primary hover:underline">opting into</a> usage tracking on OpenRouter
            </p>
          </div>
          <div className="group relative">
            <Button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground h-9 px-4 border rounded-full text-sm pl-4 pr-2" type="button" id="options-menu" aria-haspopup="true" aria-expanded="true">
              Today
              <ChevronDown className="size-4" />
            </Button>
          </div>
        </div>

        {/* Top Apps List */}
        <div className="transition-opacity grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16">
          <div className="flex flex-col space-y-5">
            {/* App items would go here */}
            <AppItem 
              rank={1}
              name="Cline"
              description="Autonomous coding agent right in your IDE"
              tokens="34.1B"
              icon="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://cline.bot/&size=256"
            />
            <AppItem 
              rank={2}
              name="Roo Code"
              description="A whole dev team of AI agents in your editor"
              tokens="26.6B"
              icon="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://roocode.com/&size=256"
            />
            <AppItem 
              rank={3}
              name="Kilo Code"
              description="AI coding agent for VS Code"
              tokens="6.96B"
              icon="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://kilocode.ai/&size=256"
            />
            <AppItem 
              rank={4}
              name="SillyTavern"
              description="LLM frontend for power users"
              tokens="5.35B"
              icon="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://sillytavern.app/&size=256"
            />
            <AppItem 
              rank={5}
              name="Chub AI"
              description="GenAI for everyone"
              tokens="4.26B"
              icon="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://chub.ai/&size=256"
            />
            <AppItem 
              rank={6}
              name="liteLLM"
              description="Open-source library to simplify LLM calls"
              tokens="4.09B"
              icon="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://litellm.ai/&size=256"
            />
            <AppItem 
              rank={7}
              name="HammerAI"
              description="Chat with AI characters for free"
              tokens="1.89B"
              icon="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.hammerai.com/&size=256"
            />
            <AppItem 
              rank={8}
              name="Infinite Worlds"
              description="Build your own adventures, share them with friends"
              tokens="1.59B"
              icon="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://infiniteworlds.app/&size=256"
            />
            <AppItem 
              rank={9}
              name="OpenRouter: Chatroom"
              description="Chat with multiple LLMs at once"
              tokens="1.53B"
              icon="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://openrouter.ai/chat&size=256"
            />
            <AppItem 
              rank={10}
              name="t.me"
              description={<span className="text-primary">new</span>}
              tokens="1.13B"
              icon="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://t.me/&size=256"
            />
          </div>
          <div className="flex flex-col space-y-5">
            {/* More app items would go here */}
            <AppItem 
              rank={11}
              name="shapes inc"
              description="General purpose social agents"
              tokens="1.09B"
              icon="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://shapes.inc/&size=256"
            />
            <AppItem 
              rank={12}
              name="Open WebUI"
              description="Extensible, self-hosted AI interface"
              tokens="869M"
              icon="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://openwebui.com/&size=256"
            />
            <AppItem 
              rank={13}
              name="Quack"
              description="Design and interact with characters"
              tokens="854M"
              icon="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://quack.im/&size=256"
            />
            <AppItem 
              rank={14}
              name="Caveduck"
              description="AI character chat"
              tokens="805M"
              icon="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.caveduck.io/&size=256"
            />
            <AppItem 
              rank={15}
              name="Fraction AI"
              description="Large perpetual datasets with community ownership"
              tokens="715M"
              icon="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://dapp.fractionai.xyz/&size=256"
            />
            <AppItem 
              rank={16}
              name="Jupi"
              description="Roleplay & fantasy chat"
              tokens="705M"
              icon="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.jupi.chat/&size=256"
            />
            <AppItem 
              rank={17}
              name="novelcrafter"
              description="Your personal novel writing toolbox. Plan, write and tinker with your story."
              tokens="615M"
              icon="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://novelcrafter.com/&size=256"
            />
            <AppItem 
              rank={18}
              name="Aider"
              description="AI pair programming in your terminal"
              tokens="604M"
              icon="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://aider.chat/&size=256"
            />
            <AppItem 
              rank={19}
              name="Khui AI"
              description={<span className="text-primary">new</span>}
              tokens="582M"
              icon="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.khuiai.com/&size=256"
            />
            <AppItem 
              rank={20}
              name="Kortix AI"
              description={<span className="text-primary">new</span>}
              tokens="571M"
              icon="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://kortix.ai/&size=256"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full mt-16 border-t py-4 text-xs text-muted-foreground">
        <div className="container flex justify-between items-center">
          <div>© 2023 - 2025 OpenRouter, Inc.</div>
          <div className="flex gap-4">
            <a href="/status" className="hover:text-foreground">Status</a>
            <a href="/announcements" className="hover:text-foreground">Announcements</a>
            <a href="/docs" className="hover:text-foreground">Docs</a>
            <a href="/partners" className="hover:text-foreground">Partners</a>
            <a href="/careers" className="hover:text-foreground">Careers</a>
            <a href="/pricing" className="hover:text-foreground">Pricing</a>
            <a href="/privacy" className="hover:text-foreground">Privacy</a>
            <a href="/terms" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Component for Model Cards
const ModelCard = ({ name, provider, tokens, latency, growth, isNew = false, isHighlighted = false, providerIcon, isDarkInvert = false }) => {
  const growthColor = growth.startsWith("+") ? "text-green-10" : growth.startsWith("-") ? "text-red-10" : "text-slate-9";
  
  return (
    <div className={`group/card text-card-foreground transition-all duration-200 hover:text-slate-12 hover:shadow-lg group bg-background rounded-lg border p-4 shadow-sm hover:border-primary ${isHighlighted ? 'md:border-primary' : 'border-slate-6'}`}>
      <div className="space-y-2">
        <div>
          <a className="hover:underline" href={`https://openrouter.ai/${provider}/${name.toLowerCase().replace(/\s+/g, '-')}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <h3 className="text-foreground font-medium">{name}</h3>
                {isNew && <span className="bg-muted text-muted-foreground rounded-sm px-1.5 py-0.5 text-[10px]">New</span>}
              </div>
              <div className="items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 hidden md:flex transition-transform group-hover:scale-110 group-hover:rotate-12">
                <div className={`overflow-hidden rounded-full ${isDarkInvert ? 'dark:invert' : ''}`}>
                  <img width="256" height="256" alt={`Favicon for ${provider}`} src={providerIcon} className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </a>
          <div className="flex items-center">
            <span className="text-muted-foreground text-xs">by <a className="text-primary hover:underline" href={`https://openrouter.ai/${provider}`}>{provider}</a></span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 pt-2 md:pt-0">
          <div>
            <p className="text-green-10 text-sm font-medium">{tokens}</p>
            <p className="text-muted-foreground text-[10px]">Tokens/wk</p>
          </div>
          <div>
            <p className="text-sm font-medium">{latency}</p>
            <p className="text-muted-foreground text-[10px]">Latency</p>
          </div>
          <div>
            <p className={`text-sm font-medium ${growthColor}`}>{growth}</p>
            <p className="text-muted-foreground text-[10px]">Weekly growth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for Provider Icons
const ProviderIcon = ({ src, alt, animationDelay, small = false, darkInvert = false }) => {
  const animationStyle = animationDelay ? 
    { animation: `float${Math.floor(Math.random() * 25)} 4s ease-in-out infinite ${animationDelay}`, opacity: 0.85 } : 
    {};
  
  return (
    <div 
      className={`${small ? 'size-6' : 'size-9'} transform hover:scale-110 hover:brightness-110 transition-all duration-500 ease-out`} 
      style={animationStyle}
    >
      <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
        <div className={`overflow-hidden rounded-full ${darkInvert ? 'dark:invert' : ''}`}>
          <img width="256" height="256" alt={`Favicon for ${alt}`} src={src} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

// Component for Feature Cards
const FeatureCard = ({ title, description, link, linkText, imageContent }) => {
  return (
    <a href={link} className="h-full">
      <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col h-full justify-between overflow-hidden">
        <div className="bg-background shadow-none transition-transform group-hover/card:scale-105 group-hover/card:-translate-y-1 relative h-48 overflow-hidden rounded-t-xl border-b p-2 flex-shrink-0">
          {imageContent}
        </div>
        <div className="flex flex-col gap-2 px-6 py-4 h-full">
          <div className="flex flex-col gap-2 h-full">
            <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-2xl font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <span className="text-primary group-hover/card:underline">
            {linkText}
            <ArrowUpRight className="ml-1 inline-block w-4" />
          </span>
        </div>
      </div>
    </a>
  );
};

// Component for App Items
const AppItem = ({ rank, name, description, tokens, icon }) => {
  return (
    <div className="grid grid-cols-12 items-center rounded-lg">
      <div className="col-span-1 text-left text-slate-11">{rank}.</div>
      <div className="col-span-1">
        <div className="flex items-center justify-center rounded-md p-1.5 size-10 shadow-inner bg-muted/40">
          <div className="overflow-hidden rounded size-5">
            <img width="256" height="256" alt={`Favicon for ${name}`} src={icon} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
      <div className="col-span-6 pl-6 text-left">
        <a className="block truncate font-medium text-slate-11 hover:text-slate-12 hover:underline transition-colors group cursor-pointer" href={`https://openrouter.ai/apps?url=${encodeURIComponent(`https://${name.toLowerCase().replace(/\s+/g, '')}.com/`)}`}>
          {name} <ArrowRight className="inline w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
        <div className="truncate text-xs text-slate-9">{description}</div>
      </div>
      <div className="col-span-4 text-right">
        <span className="text-sm font-medium text-muted-foreground">{tokens}</span>
        <span className="text-xs text-slate-9 ml-1">tokens</span>
      </div>
    </div>
  );
};

export default Index;