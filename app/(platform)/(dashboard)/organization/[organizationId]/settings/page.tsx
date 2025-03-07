import { OrganizationProfile } from "@clerk/nextjs";

const SettingsPage = () => {
    return (
        <div className="w-full">
            <OrganizationProfile appearance={{
                elements: {
                    rootBox: {
                        boxShadow: 'inherit',
                        width: '100%'
                    },
                    card: {
                        border: '1 px solid #e5e5e5',
                        boxShadow: 'none',
                        width: '100%'
                    }
                }
            }}/>
        </div>
    )
}

export default SettingsPage;