# DailySummary
How to run dev:  
In the app folder  
1.) npm update  
2.) npx next build  
3.) npx next export  
4.) run this in console "mv ./out/_next ./out/next && cd ./out && grep -rl '/_next' * | xargs sed -i 's|/_next|/next|g"  
5.) Load the "out" folder into chrome://extensions  
  
