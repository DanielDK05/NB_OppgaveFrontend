export interface LoginObject {
    name: string,
    email: string,
    credits: number,
    avatar: string,
    accessToken: string
}

export interface ListingObject {
    id: string,
    title: string,
    description: string,
    tags: string[],
    media: string[],
    created: Date,
    updated: Date,
    endsAt: Date,
    _count: {
        bids: number
    }
}