package com.app.LinguAll.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PostService {
    private final PostRepository repository;

    @Autowired
    public PostService(PostRepository repository) {
        this.repository = repository;
    }

    public List<PostEntity> getAllPosts() {
        return repository.findAll();
    }

    public PostEntity addPost(PostEntity post) {
        return repository.save(post);
    }
}

