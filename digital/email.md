# Email

- Act on it right away, is possible.
- Flag > Act Later.
- Ignore
- Unsubscribe


Email is critical infrastructure for the Internet
https://utcc.utoronto.ca/~cks/space/blog/tech/EmailCriticalInfrastructure

Email is our only reliable communication method between different organizations. There are a huge variety of intra-organizational communication systems, to the point where pretty much every large enterprise provider seems to have one (Slack, Microsoft Teams, Discord, etc etc). These work fine inside an organization or a closed group of people, and they can be better than email in various ways (hence their popularity). But all of them are at best cumbersome when you want to reach out for inter-organizational communication, to work with an outsider, and they always will be because they aren't federated (especially across service boundaries).

There are some services that aspire to being universal in this way, such as Facebook with WhatsApp (which is used for for customer communication by businesses in some areas of the world). But since they're all central and non-federated, they all suffer from having to trust the central service provider or, to put it another way, they suffer from people not wanting to give any single party that much power. A world where everyone communicates between organizations over WhatsApp is a world where Facebook holds a huge amount of power (and probably gets paid actual money by someone), and plenty of organizations don't want that.

The prospect for another federated, Internet wide communication system seem very remote at this point in time, so email is it. The practical alternative is probably some dystopian version of the Internet where one of the centralized systems wins out so everyone has to be on it.

(SMS is a federated system for some portion of the people on the Internet, but it has various disadvantages. Some of them come about due to history, but others come about because SMS was monetized from the start. And like email, SMS messaging has its own spam problems, which doesn't encourage people to open it up more.)

I think a corollary of this is that it's to the advantage of all of the big centralized systems to keep email alive. If they kill email, on the one hand it could drive people to their central system, but on the other hand it might force people to someone else's central system, because people will be forced to do something and they probably won't join everyone's system (especially if there's a cost associated). As long as there's no obvious winning central communication system, all of them have a lot to potentially lose if email dies.

## Tools, Setup, and Maintenance
`DMARC, SPF, DKIM`

- An interactive tutorial on how email's [DMARC, SPF, and DKIM work](https://www.learndmarc.com).
- https://dmarcian.com
- https://easydmarc.com