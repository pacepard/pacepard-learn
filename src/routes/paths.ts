/** Browser / React Router paths for learn.onaeko.com */

const AppURL = import.meta.env.VITE_APP_URL ?? '';

export const RouteURL = {
    // Root
    home: '/',

    // Onboarding (app entry — no auth screens in Learn)
    onboarding: '/onboarding',
    onboardingBasicInfo: '/onboarding/basic-info',
    onboardingUserInfo: '/onboarding/user-info',
    onboardingBusinessInfo: '/onboarding/business-info',
    onboardingCreateWorkspace: '/onboarding/create-workspace',
    onboardingInviteTeammates: '/onboarding/invite-teammates',

    // Post-onboarding learn home (placeholder destination)
    learn: '/learn',
    programs: '/programs',

    // Kept for shared utils / API callbacks (not mounted as auth UI)
    login: '/login',
    logout: '/logout',
    register: '/register',
    myAccount: '/learn',

    regCallback: `${AppURL}/onboarding`,
    subCallback: `${AppURL}/learn`,
};
