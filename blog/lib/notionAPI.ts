import {Client} from "@notionhq/client";

const notion = new Client({

    auth:process.env.NOTION_TOKEN,
});

export const getAllPosts = async () =>{
    const posts = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        page_size:100
    });

    const allPosts = posts.results;

    return allPosts.map((post) =>{
        return getPageMetaData(post);
    });
};

const getPageMetaData = (post) =>{
    const getTags = (tags) =>{
        const allTags = tags.map((tag) =>{
            return tag.name;
        });

        return allTags
    } ;

    return{
        title1: post, //確認用
        id: post.id,
        title: post.properties.title.title[0]?.plain_text,
        date: post.properties.days.date.start,
        slug: post.properties.slug.rich_text[0].plain_text,
        // tags: post.properties.Tags.multi_select[0].name,
        tags: getTags(post.properties.Tags.multi_select)
        
    }
}