#!/usr/bin/env bash

set -e

mkdir -p iti-job-portal/client/public
mkdir -p iti-job-portal/client/src/assets/images
mkdir -p iti-job-portal/client/src/assets/styles
mkdir -p iti-job-portal/client/src/components/common
mkdir -p iti-job-portal/client/src/components/layout
mkdir -p iti-job-portal/client/src/components/ui
mkdir -p iti-job-portal/client/src/context
mkdir -p iti-job-portal/client/src/features/auth
mkdir -p iti-job-portal/client/src/features/students
mkdir -p iti-job-portal/client/src/features/employers
mkdir -p iti-job-portal/client/src/features/jobs
mkdir -p iti-job-portal/client/src/features/admin
mkdir -p iti-job-portal/client/src/hooks
mkdir -p iti-job-portal/client/src/layouts
mkdir -p iti-job-portal/client/src/pages/auth
mkdir -p iti-job-portal/client/src/pages/student
mkdir -p iti-job-portal/client/src/pages/employer
mkdir -p iti-job-portal/client/src/pages/admin
mkdir -p iti-job-portal/client/src/pages/public
mkdir -p iti-job-portal/client/src/services
mkdir -p iti-job-portal/client/src/utils

mkdir -p iti-job-portal/server/src/config
mkdir -p iti-job-portal/server/src/controllers
mkdir -p iti-job-portal/server/src/middlewares
mkdir -p iti-job-portal/server/src/models
mkdir -p iti-job-portal/server/src/routes
mkdir -p iti-job-portal/server/src/services
mkdir -p iti-job-portal/server/src/utils
mkdir -p iti-job-portal/server/src/validators

mkdir -p iti-job-portal/docs

touch iti-job-portal/client/public/index.html
touch iti-job-portal/client/src/App.js
touch iti-job-portal/client/src/index.js
touch iti-job-portal/client/package.json
touch iti-job-portal/client/.env.example

touch iti-job-portal/server/src/config/db.js
touch iti-job-portal/server/src/config/env.js
touch iti-job-portal/server/src/controllers/auth.controller.js
touch iti-job-portal/server/src/controllers/student.controller.js
touch iti-job-portal/server/src/controllers/employer.controller.js
touch iti-job-portal/server/src/controllers/job.controller.js
touch iti-job-portal/server/src/controllers/application.controller.js
touch iti-job-portal/server/src/controllers/admin.controller.js
touch iti-job-portal/server/src/middlewares/auth.middleware.js
touch iti-job-portal/server/src/middlewares/role.middleware.js
touch iti-job-portal/server/src/middlewares/error.middleware.js
touch iti-job-portal/server/src/middlewares/upload.middleware.js
touch iti-job-portal/server/src/models/User.js
touch iti-job-portal/server/src/models/StudentProfile.js
touch iti-job-portal/server/src/models/EmployerProfile.js
touch iti-job-portal/server/src/models/Job.js
touch iti-job-portal/server/src/models/Application.js
touch iti-job-portal/server/src/models/Notification.js
touch iti-job-portal/server/src/routes/auth.routes.js
touch iti-job-portal/server/src/routes/student.routes.js
touch iti-job-portal/server/src/routes/employer.routes.js
touch iti-job-portal/server/src/routes/job.routes.js
touch iti-job-portal/server/src/routes/application.routes.js
touch iti-job-portal/server/src/routes/admin.routes.js
touch iti-job-portal/server/src/services/auth.service.js
touch iti-job-portal/server/src/services/job.service.js
touch iti-job-portal/server/src/services/application.service.js
touch iti-job-portal/server/src/services/notification.service.js
touch iti-job-portal/server/src/utils/logger.js
touch iti-job-portal/server/src/utils/ApiError.js
touch iti-job-portal/server/src/utils/ApiResponse.js
touch iti-job-portal/server/src/validators/auth.validator.js
touch iti-job-portal/server/src/validators/job.validator.js
touch iti-job-portal/server/src/validators/application.validator.js
touch iti-job-portal/server/src/app.js
touch iti-job-portal/server/src/server.js
touch iti-job-portal/server/package.json
touch iti-job-portal/server/.env.example

touch iti-job-portal/docs/project-requirements.md
touch iti-job-portal/docs/api-documentation.md
touch iti-job-portal/docs/database-design.md
touch iti-job-portal/docs/deployment-guide.md

touch iti-job-portal/README.md
touch iti-job-portal/.gitignore
touch iti-job-portal/package.json