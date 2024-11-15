export const graphQLSchema = `#graphql

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String
        googleId: String
        role: String!
        avatar: String!
        verified: Boolean!
        createdAt: String!
        updatedAt: String!
        courses:[Course]
    }

    type Course {
        _id: ID!
        title: String!
        description: String!
        instructor: User
        ratingsAverage: Int!
        ratingsQuantity: Int!
        price: Int!
        category: String!
        subCategory: String!
        level: String!
        language: String!
        whatYouWillLearn:[String!]!
        requirements:[String!]!
        targetAudience: [String!]!
        isPublished: Boolean!
        isFree:Boolean!
        isApproved: Boolean!
        isRejected: Boolean!
        isFeatured: Boolean!
        isTrending: Boolean!
        isBestSeller:Boolean!
        coverImage: String!
        previewVideo: String!
        students: [String!]!
        createdAt: String!
        updatedAt: String!
    }

    type Resource {
        title: String
        url: String
        _id:ID
    }

    type VideoUrl {
        _480p:String
        _720p:String
        _1080p:String
    }

    type Lecture {
        _id: ID!
        title: String!
        description: String!
        position:Int!
        resources:[Resource]
        videoUrl:VideoUrl
        duration:Int!
        # section:Section!
        course:Course!
        instructor:User!
        isPublished:Boolean!
        isPreview:Boolean!
        createdAt:String!
        updatedAt:String!
    }

    type sampleUser {
        name: String!
        age: Int!
        gender: String!
    }

    type Query {
        # hello:String
        # wow:String
        users:[User]
        courses:[Course]
        course(id:ID!):Course
        lectures:[Lecture]
        sampleUsers:[sampleUser]
        
        # sections:[Section]
    }

    type Mutation {
        newUser(name:String!,age:Int!,gender:String!):String
    }
`;