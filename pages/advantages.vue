<script setup>
definePageMeta({
  layout: 'default'
})
</script>

<template>
  <div class="text-[#f6e6fd] font-body selection:bg-[#cc97ff]/30 antialiased">
    <main class="overflow-hidden">
      <!-- Hero Section -->
      <section class="relative min-h-[85vh] flex flex-col items-center justify-center px-6 text-center">
        <div class="max-w-4xl mx-auto py-20 relative z-10" v-reveal>
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-8 border-primary/20 inner-glow">
            <span class="w-2 h-2 rounded-full bg-tertiary animate-pulse shadow-[0_0_10px_rgba(71,196,255,0.8)]"></span>
            <span class="text-xs font-bold uppercase tracking-widest text-tertiary font-label">The Future of Governance</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter text-white mb-6 leading-[1.1]">
            The Digital Edge for <br/>
            <span class="bg-gradient-to-r from-primary via-tertiary to-primary-dim ">Modern Governance</span>
          </h1>
          <p class="text-lg md:text-xl text-[#b4a6bc] max-w-2xl mx-auto mb-10 leading-relaxed font-body">
            Empowering SK Federations with enterprise-grade tools to automate compliance, visualize impact, and secure youth development data on a unified, high-fidelity platform.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-white text-[#130b1a] font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:bg-primary hover:text-on-primary transition-all active:scale-95">Schedule a Demo</button>
            <button class="bg-[#2d2137]/50 backdrop-blur-md border border-white/10 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-[#2d2137] transition-all active:scale-95 inner-glow">View Pricing</button>
          </div>
        </div>
      </section>

      <!-- Key Advantages Section (Bento Grid) -->
      <section class="py-32 px-6 max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6" v-reveal>
          <div class="max-w-2xl">
            <h2 class="text-sm font-black uppercase tracking-[0.3em] text-tertiary mb-4">Core Advantages</h2>
            <h3 class="text-4xl md:text-5xl font-bold font-headline tracking-tight text-white">Precision Tools for Public Service</h3>
          </div>
          <p class="text-[#b4a6bc] max-w-sm mb-2">Designed specifically for the unique regulatory landscape of Philippine youth governance.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6">

          <!-- Advantage 1: Real-Time Data -->
          <div class="md:col-span-8 glass-card p-10 rounded-3xl relative overflow-hidden group inner-glow" v-reveal:left="100">
            <div class="relative z-20 h-full flex flex-col justify-between">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-tertiary/10 flex items-center justify-center mb-8 border border-tertiary/30 neon-glow-cyan">
                  <span class="mdi mdi-chart-timeline-variant text-tertiary text-4xl"></span>
                </div>
                <h4 class="text-2xl font-bold font-headline mb-4 text-white">Real-Time Data Visualization</h4>
                <p class="text-[#b4a6bc] leading-relaxed max-w-md">Gain instant insights into federation performance and youth engagement metrics. Our live dashboards turn complex reports into actionable governance data.</p>
              </div>
              <div class="mt-12 flex gap-4">
                <span class="px-4 py-1.5 rounded-full bg-[#2d2137] border border-white/5 text-[10px] font-bold text-tertiary uppercase tracking-wider">Live Analytics</span>
                <span class="px-4 py-1.5 rounded-full bg-[#2d2137] border border-white/5 text-[10px] font-bold text-primary uppercase tracking-wider">Map View</span>
              </div>
            </div>
            <div class="absolute top-0 right-0 w-3/5 h-full opacity-40 group-hover:opacity-80 transition-all duration-700 -rotate-3 translate-x-10 translate-y-10 group-hover:rotate-0 group-hover:translate-x-4">
              <img alt="Data Visualization" class="h-full w-full object-cover rounded-xl border border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIW_N12ZJr9tEcNYIjNAapnqu415qbzxBLrrvNrzX6984GUASiOtuUd_HwRMh6paM2Flkte36IfQGsOt97ELjc-sXE-_qNcuzflG-1Ew_Uw5QcKSzydYJFhy5-ou6sdKkt3XMu8Wx2w5etnMKPGMSheBDFgZ18IRkDeNrjboElePvR_expnvfZgZalct0AeRMsHlItba1Xgc5gq5SxpyVgFqAxL65RSL2eCcLuBYOIosbDEEyyNRpZ5DBQetQD21tUZxmJMyfWOAXa"/>
            </div>
          </div>

          <!-- Advantage 2: Automated Compliance -->
          <div class="md:col-span-4 bg-[#190f21] p-10 rounded-3xl border border-white/5 flex flex-col justify-between glass-card inner-glow relative overflow-hidden group" v-reveal:right="200">
            <div class="relative z-10">
              <div class="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 border border-secondary/30">
                <span class="mdi mdi-clipboard-check text-secondary text-4xl"></span>
              </div>
              <h4 class="text-2xl font-bold font-headline mb-4 text-white">Automated Compliance</h4>
              <p class="text-[#b4a6bc] leading-relaxed">Generate DILG and COA-ready reports with one click. Error-free, standardized, and always on time.</p>
            </div>
            <div class="mt-8 relative z-10 p-4 bg-[#2d2137] rounded-xl border border-white/10 inner-glow">
              <div class="flex items-center gap-3 text-sm font-bold text-white">
                <span class="mdi mdi-check-circle text-tertiary text-xl"></span>
                COA Audit Ready
              </div>
            </div>
          </div>

          <!-- Advantage 3: Unified Procurement -->
          <div class="md:col-span-4 glass-card p-10 rounded-3xl inner-glow border-white/5 relative overflow-hidden group" v-reveal:left="100">
            <div class="relative z-10">
              <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/30 neon-glow-violet">
                <span class="mdi mdi-wallet text-primary text-4xl"></span>
              </div>
              <h4 class="text-2xl font-bold font-headline mb-4 text-white">Unified Procurement</h4>
              <p class="text-[#b4a6bc] leading-relaxed mb-6">Streamline purchasing from requisition to delivery with full transparency and budget tracking.</p>
              <div class="space-y-3">
                <div class="h-2 w-full bg-[#2d2137] rounded-full overflow-hidden border border-white/5">
                  <div class="h-full w-3/4 bg-primary rounded-full shadow-[0_0_10px_rgba(204,151,255,0.5)]"></div>
                </div>
                <p class="text-[10px] font-bold text-primary uppercase tracking-widest">Budget Utilization: 75%</p>
              </div>
            </div>
            <div class="absolute -bottom-16 -left-16 w-full h-1/2 opacity-15 group-hover:opacity-30 transition-all duration-700 pointer-events-none">
              <img alt="Financial Grid" class="w-full h-full object-cover rounded-2xl border border-white/10 rotate-[8deg]" src="https://lh3.googleusercontent.com/aida/ADBb0uhVZ616MBKjTPo06PHPk2UO1_MH3U6FCQjnFVoUouQURGFGxq1oQMrur5iDleWsEKVx--YGhJtmSmm2CPe_VsJXBu_Lx2JGvgfLpD7X9DCi8WG9TRXYvAHgmTNqjATvV6yk5UrR1LxBWQ7pvmoHuqS_UG2RQZZ7NSwrV5c9dTYvNy2mzDnosTcRrwlR6UrzKToQdqRggKrSTDZM1i8SpMhizXQX_khdR8m1KuXzB4d-c1d3T2vtbzH_4fMQ"/>
            </div>
          </div>

          <!-- Advantage 4: Cloud-Native Security -->
          <div class="md:col-span-8 bg-[#190f21] p-10 rounded-3xl border border-white/5 relative overflow-hidden glass-card inner-glow group" v-reveal:right="200">
            <div class="relative z-20 h-full flex flex-col justify-between">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-error/10 flex items-center justify-center mb-8 border border-error/30">
                  <span class="mdi mdi-shield-check text-error text-4xl"></span>
                </div>
                <div class="flex flex-col md:flex-row md:items-start justify-between gap-12">
                  <div class="max-w-md">
                    <h4 class="text-2xl font-bold font-headline mb-4 text-white">Cloud-Native Security</h4>
                    <p class="text-[#b4a6bc] leading-relaxed">Enterprise-grade encryption and regional data residency for sensitive government youth data. Compliant with NPC Data Privacy standards.</p>
                  </div>
                  <div class="flex items-center gap-4">
                    <div class="p-6 bg-[#130b1a]/80 rounded-2xl border border-white/10 text-center inner-glow backdrop-blur-md min-w-[120px]">
                      <div class="text-2xl font-black text-white">AES-256</div>
                      <div class="text-xs text-[#b4a6bc] uppercase tracking-widest font-bold mt-1">Encryption</div>
                    </div>
                    <div class="p-6 bg-[#130b1a]/80 rounded-2xl border border-white/10 text-center inner-glow backdrop-blur-md min-w-[120px]">
                      <div class="text-2xl font-black text-white">2FA</div>
                      <div class="text-xs text-[#b4a6bc] uppercase tracking-widest font-bold mt-1">Protocol</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-12 flex gap-4">
                <span class="px-4 py-1.5 rounded-full bg-[#2d2137] border border-white/5 text-[10px] font-bold text-error uppercase tracking-wider">NPC Compliant</span>
                <span class="px-4 py-1.5 rounded-full bg-[#2d2137] border border-white/5 text-[10px] font-bold text-[#b4a6bc] uppercase tracking-wider">End-to-End Encryption</span>
              </div>
            </div>
            <div class="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-error/5 via-transparent to-transparent pointer-events-none"></div>
          </div>

        </div>
      </section>

      <!-- Comparison Section -->
      <section class="py-32 bg-[#190f21]/30 border-y border-white/5">
        <div class="max-w-5xl mx-auto px-6">
          <div class="text-center mb-20">
            <h2 class="text-4xl font-bold font-headline mb-6 text-white tracking-tight">The Evolution of Governance</h2>
            <p class="text-[#b4a6bc] max-w-xl mx-auto">Compare why modern SK Federations are shifting from paper-based legacy systems to the SKLoud ecosystem.</p>
          </div>
          <div class="rounded-3xl overflow-hidden border border-white/10 shadow-2xl glass-card">
            <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-[#2d2137]/80">
                  <th class="p-8 text-sm font-bold font-headline border-b border-white/10 text-[#b4a6bc] uppercase tracking-widest">Feature</th>
                  <th class="p-8 text-sm font-bold font-headline border-b border-white/10 text-[#b4a6bc]/50 uppercase tracking-widest">Traditional</th>
                  <th class="p-8 text-sm font-bold font-headline border-b border-white/10 text-primary uppercase tracking-widest">SKLoud Ecosystem</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/5">
                <tr class="hover:bg-white/[0.02] transition-colors">
                  <td class="p-8 font-bold text-white">Reporting Speed</td>
                  <td class="p-8 text-[#b4a6bc]/70">Weeks of manual work</td>
                  <td class="p-8 text-tertiary font-bold">
                    <div class="flex items-center gap-2">
                      <span class="mdi mdi-lightning-bolt text-sm"></span>
                      Instant, One-Click
                    </div>
                  </td>
                </tr>
                <tr class="hover:bg-white/[0.02] transition-colors">
                  <td class="p-8 font-bold text-white">Data Transparency</td>
                  <td class="p-8 text-[#b4a6bc]/70">Siloed paper documents</td>
                  <td class="p-8 text-tertiary font-bold">
                    <div class="flex items-center gap-2">
                      <span class="mdi mdi-eye text-sm"></span>
                      Full Audit Trails
                    </div>
                  </td>
                </tr>
                <tr class="hover:bg-white/[0.02] transition-colors">
                  <td class="p-8 font-bold text-white">Procurement</td>
                  <td class="p-8 text-[#b4a6bc]/70">Manual canvas processes</td>
                  <td class="p-8 text-tertiary font-bold">
                    <div class="flex items-center gap-2">
                      <span class="mdi mdi-cart-check text-sm"></span>
                      Smart Digital Tendering
                    </div>
                  </td>
                </tr>
                <tr class="hover:bg-white/[0.02] transition-colors">
                  <td class="p-8 font-bold text-white">Audit Risk</td>
                  <td class="p-8 text-[#b4a6bc]/70">High (Lost files/errors)</td>
                  <td class="p-8 text-tertiary font-bold">
                    <div class="flex items-center gap-2">
                      <span class="mdi mdi-check-decagram text-sm"></span>
                      Zero-Doubt Compliance
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonial Section -->
      <section class="py-32 px-6">
        <div class="max-w-4xl mx-auto glass-card rounded-[3rem] p-12 md:p-20 relative text-center border-white/10 inner-glow overflow-hidden" v-reveal>
          <span class="mdi mdi-format-quote-open text-primary/10 text-5xl absolute top-6 left-6 pointer-events-none z-0"></span>
          <p class="text-2xl md:text-3xl font-headline font-bold text-white mb-12 relative z-10 leading-snug italic tracking-tight">
            "Transitioning to SKLoud was the turning point for our federation. We went from being buried in COA paperwork to actually spending time on youth programs. It's the digital backbone every SK leader needs."
          </p>
          <div class="flex flex-col items-center">
            <div class="w-24 h-24 rounded-full border-2 border-primary/30 p-1 mb-4 shadow-2xl shadow-primary/20 overflow-hidden">
              <img alt="Federation President" class="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeipDmZ-AlkCnl6pjWh5R67khG_MVnyIWziZMbn3W8rSj0KdUiojzJcC5zA69OKOaOswSRjou5HY4HV2zsUWLVwLYNCqtfxNYkheG_AV0vYuwaEeh_GyEUQ9aVS2Y1S6w-l5aqFR9Rf6MugdUUphyRUnRHvV3fwLg2UZElQb9b7oml-SHe-KLxgRbZ8d2h0dNsUSHigi3OPVBcVHjtRj8wemeRYo33EFfwSrhkT5LxaTvsxgHwt6MKic2gXx2sFW8tgxcxULAIzv85"/>
            </div>
            <div class="font-bold text-xl text-white">Hon. Marco Valenzuela</div>
            <div class="text-tertiary font-label uppercase tracking-widest text-[10px] mt-2 font-black">SK Federation President, Manila City</div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-32 px-6">
        <div class="max-w-7xl mx-auto bg-[#070114] border border-white/10 rounded-[3rem] p-12 md:p-24 overflow-hidden relative glass-card inner-glow">
          <div class="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-tertiary/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div class="relative z-10 flex flex-col items-center text-center">
            <h2 class="text-4xl md:text-6xl font-black font-headline text-white mb-8 tracking-tighter">Ready to modernize your federation?</h2>
            <p class="text-[#b4a6bc] text-lg md:text-xl max-w-2xl mb-12 font-medium">Join 50+ SK Federations already leading the digital revolution in Philippine local governance.</p>
            <div class="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <button class="bg-white text-[#130b1a] font-black py-5 px-10 rounded-full text-xl shadow-2xl hover:scale-105 transition-all">Schedule a Demo</button>
              <button class="bg-transparent border border-white/20 text-white font-bold py-5 px-10 rounded-full text-xl hover:bg-white/5 transition-all active:scale-95 inner-glow">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

    </main>

    <!-- Footer -->
    <footer class="bg-[#070114] w-full py-16 border-t border-white/5">
      <div class="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-8">
        <div class="flex flex-col items-center md:items-start gap-2">
          <div class="text-2xl font-black text-white font-headline tracking-tighter">SKLoud</div>
          <p class="text-xs text-[#b4a6bc] uppercase tracking-widest font-bold">Secure. Empowered. Futuristic.</p>
          <p class="text-sm text-[#b4a6bc] mt-2">© 2024 SKLoud Government Systems.</p>
        </div>
        <div class="flex flex-wrap justify-center gap-10">
          <a class="text-sm text-[#b4a6bc] hover:text-primary transition-colors font-medium" href="#">Privacy Policy</a>
          <a class="text-sm text-[#b4a6bc] hover:text-primary transition-colors font-medium" href="#">Terms of Service</a>
          <a class="text-sm text-[#b4a6bc] hover:text-primary transition-colors font-medium" href="#">Security Audit</a>
          <a class="text-sm text-[#b4a6bc] hover:text-primary transition-colors font-medium" href="#">Contact Support</a>
        </div>
      </div>
    </footer>

  </div>
</template>

<style>
.hero-gradient {
  background: radial-gradient(circle at 50% 30%, rgba(204, 151, 255, 0.12) 0%, transparent 60%);
}
.glass-card {
  background: rgba(15, 15, 18, 0.6);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}
.glass-card:hover {
  border-color: rgba(204, 151, 255, 0.2);
}
.neon-glow-cyan { box-shadow: 0 0 15px rgba(71, 196, 255, 0.3); }
.neon-glow-violet { box-shadow: 0 0 15px rgba(204, 151, 255, 0.3); }
.inner-glow { box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1); }
.font-headline { font-family: 'Manrope', sans-serif; }
.font-label { font-family: 'Inter', sans-serif; }
</style>
