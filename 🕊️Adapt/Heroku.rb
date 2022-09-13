apt update && apt upgrade -y && apt install -y aptitude jq git curl wget ffmpeg nodejs npm ruby-full bpm-tools opus-tools python3-pip python-is-python3 && npm install -g n yarn && n install 16.15.1 && hash -r && curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl && curl https://cli-assets.heroku.com/install.sh | sh && heroku plugins:install heroku-builds && chmod a+rx /usr/local/bin/youtube-dl && hash -r
heroku addons:remove heroku-postgresql:hobby-dev --confirm vlkyre-proto
heroku addons:add heroku-postgresql:hobby-dev -a vlkyre-proto
curl https://cli-assets.heroku.com/install.sh | sh
heroku pg:reset -a vlkyre-proto --confirm vlkyre-proto
heroku plugins:install heroku-builds
heroku ps:restart worker -a vlkyre-proto
heroku builds:cancel -a vlkyre-proto
heroku ps:stop run.6654
