// Define types and enums to represent different components of the Raft algorithm
type Term = number;
type LogIndex = number;

enum NodeState {
    FOLLOWER = "follower",
    CANDIDATE = "candidate",
    LEADER = "leader",
}

type NodeId = string;

type LogEntry = {
    term: Term;
    command: any;
};

type Log = LogEntry[];

type StateMachine = {
    applyCommand: (command: any) => void;
};

type NodeConfiguration = {
    id: NodeId;
    stateMachine: StateMachine;
    currentTerm: Term;
    votedFor: NodeId | null;
    log: Log;
};

type RequestVoteRPC = {
    term: Term;
    candidateId: NodeId;
    lastLogIndex: LogIndex;
    lastLogTerm: Term;
};

type RequestVoteResponse = {
    term: Term;
    voteGranted: boolean;
};

type AppendEntriesRPC = {
    term: Term;
    voteGranted: boolean;
};

type AppendEntriesResponse = {
    term: Term;
    success: boolean;
};