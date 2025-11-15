FROM node:20-alpine

WORKDIR /app

# Copy package files (including package-lock.json for reproducible installs)
COPY package*.json ./

# Install dependencies (npm ci is still used for clean installs)
RUN npm install

# Copy source code
COPY . .

# Set environment variables for the dev server
ENV HOST=0.0.0.0
ENV PORT=3000

# Expose port 3000
EXPOSE 3000

# Start development server
CMD ["npm", "start"]

# build 
# docker build -t recipe-finder .

# Run
# docker run -it -p 3000:3000 -v $(pwd):/app recipe-finder
